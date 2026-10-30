import assert from "node:assert/strict";
import { afterEach, beforeEach, test, mock } from "node:test";
import { POST } from "../app/api/contact/route";

const originalEnv = { ...process.env };
let emailCalls: Record<string, unknown>[];
let count: number;
let providerStatus: number;
let redisFails: boolean;
beforeEach(() => {
 process.env.UPSTASH_REDIS_REST_URL = "https://redis.example.test";
 process.env.UPSTASH_REDIS_REST_TOKEN = "test";
 process.env.RATE_LIMIT_SALT = "test-salt";
 process.env.CONTACT_IP_HEADER = "x-test-client-ip";
 process.env.RESEND_API_KEY = "test";
 process.env.CONTACT_FROM_EMAIL = "website@example.test";
 process.env.CONTACT_TO_EMAIL = "admin@example.test";
 emailCalls = []; count = 1; providerStatus = 200; redisFails = false;
 mock.method(globalThis, "fetch", async (url: string, init: RequestInit) => {
  if (url === process.env.UPSTASH_REDIS_REST_URL) {
   if (redisFails) throw new Error("offline");
   assert.ok(!String(init.body).includes("203.0.113.1"), "raw IP must not be stored");
   return Response.json({ result: [count, 600] });
  }
  assert.equal(url, "https://api.resend.com/emails");
  emailCalls.push(JSON.parse(String(init.body)));
  return Response.json({ id: "test-message" }, {status: providerStatus});
 });
});
afterEach(() => { mock.restoreAll(); for (const key of Object.keys(process.env)) if (!(key in originalEnv)) delete process.env[key]; Object.assign(process.env, originalEnv); });
const valid = { name: "Test Baker", email: "baker@example.test", phone: "+27768052041", service: "other", message: "Please quote for this equipment.", product: "deck-oven-3-deck", honeypot: "" };
const request = (body: unknown = valid, headers: Record<string,string> = {}) => new Request("https://www.bessequipment.co.za/api/contact", {method: "POST", headers: {"content-type": "application/json", "x-test-client-ip": "203.0.113.1", ...headers}, body: typeof body === "string" ? body : JSON.stringify(body)});

test("sends validated equipment context and visitor Reply-To", async () => {
 assert.equal((await POST(request())).status, 200);
 assert.equal(emailCalls.length, 1);
 assert.equal(emailCalls[0].reply_to, valid.email);
 assert.deepEqual(emailCalls[0].to, ["admin@example.test"]);
 assert.match(String(emailCalls[0].text), /Artisan 3-Deck Oven/);
 assert.equal(emailCalls[0].html, undefined);
});
test("rejects invalid email, injected name, unknown product, spam and extra keys", async () => {
 for (const change of [{email: "invalid"}, {name: "Name\r\nBcc: victim@example.test"}, {message: "<script>alert(1)</script>"}, {product: "unknown"}, {honeypot: "bot"}, {admin: true}, {division: "invalid"}]) assert.equal((await POST(request({...valid, ...change}))).status, 400);
 assert.equal(emailCalls.length, 0);
});
test("rejects malformed JSON and oversized bodies", async () => {
 assert.equal((await POST(request("{"))).status, 400);
 assert.equal((await POST(request("x".repeat(17000)))).status, 413);
 assert.equal(emailCalls.length, 0);
});
test("rejects foreign origin and non-JSON requests", async () => {
 assert.equal((await POST(request(valid, {origin: "https://attacker.example.test"}))).status, 403);
 assert.equal((await POST(request(valid, {"content-type": "text/plain"}))).status, 415);
 assert.equal(emailCalls.length, 0);
});
test("returns 429 and Retry-After once shared limit is exceeded", async () => {
 count = 6;
 const response = await POST(request());
 assert.equal(response.status, 429); assert.equal(response.headers.get("Retry-After"), "600"); assert.equal(emailCalls.length, 0);
});
test("fails closed when rate limiting or trusted IP is unavailable", async () => {
 redisFails = true; assert.equal((await POST(request())).status, 503);
 redisFails = false; assert.equal((await POST(request(valid, {"x-test-client-ip": "invalid"}))).status, 503);
 delete process.env.CONTACT_IP_HEADER; assert.equal((await POST(request())).status, 503);
 assert.equal(emailCalls.length, 0);
});
test("never reports success on missing credentials or provider failure", async () => {
 delete process.env.RESEND_API_KEY; assert.equal((await POST(request())).status, 503);
 process.env.RESEND_API_KEY = "test"; providerStatus = 500;
 assert.equal((await POST(request())).status, 502);
});

test("accepts catalog requests for all three divisions and includes context in the email", async () => {
 for (const division of ["bakery", "butchery", "services"]) {
  const response = await POST(request({...valid, product: "", division, service: "catalog", message: `Please send the ${division} equipment catalog.`}));
  assert.equal(response.status, 200);
  assert.match(String(emailCalls.at(-1)?.text), new RegExp(`Division: ${division}`));
  assert.equal(emailCalls.at(-1)?.subject, "BESS enquiry: catalog");
 }
});

