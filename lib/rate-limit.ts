import { createHmac } from "node:crypto";
import { isIP } from "node:net";
// Atomic Redis counters work across serverless instances. Never trust an arbitrary forwarded header.
export async function checkRateLimit(request: Request) {
 const url = process.env.UPSTASH_REDIS_REST_URL;
 const token = process.env.UPSTASH_REDIS_REST_TOKEN;
 const header = process.env.CONTACT_IP_HEADER;
 const salt = process.env.RATE_LIMIT_SALT;
 if (!url || !token || !header || !salt) throw new Error("Rate limiting is not configured");
 const ip = request.headers.get(header)?.split(",")[0].trim();
 if (!ip || !isIP(ip)) throw new Error("Trusted client IP unavailable");
 const key = `bess:contact:${createHmac("sha256", salt).update(ip).digest("hex")}`;
 const script = "local n=redis.call('INCR',KEYS[1]); if n==1 then redis.call('EXPIRE',KEYS[1],600) end; return {n,redis.call('TTL',KEYS[1])}";
 const response = await fetch(url, { method: "POST", headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }, body: JSON.stringify(["EVAL", script, "1", key]), signal: AbortSignal.timeout(5000), cache: "no-store" });
 if (!response.ok) throw new Error("Rate limiting unavailable");
 const data = await response.json() as {result?: [number, number]};
 if (!Array.isArray(data.result) || data.result.length !== 2 || !data.result.every(Number.isFinite)) throw new Error("Invalid limiter response");
 return { allowed: data.result[0] <= 5, retryAfter: Math.max(1, data.result[1]) };
}
