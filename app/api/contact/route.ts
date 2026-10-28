import { contactSchema } from "@/lib/contact-schema";
import { checkRateLimit } from "@/lib/rate-limit";
import { equipment } from "@/lib/data";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
 try {
  if (!(request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() === "application/json")) return NextResponse.json({ message: "JSON required" }, { status: 415 });
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin && origin !== process.env.NEXT_PUBLIC_SITE_URL) return NextResponse.json({ message: "Origin not allowed" }, { status: 403 });
  let limit;
  try { limit = await checkRateLimit(request); } catch { return NextResponse.json({ message: "Contact service temporarily unavailable. Please email us directly." }, { status: 503 }); }
  if (!limit.allowed) return NextResponse.json({ message: "Too many enquiries. Please try again later." }, { status: 429, headers: { "Retry-After": String(limit.retryAfter) } });
  const reader = request.body?.getReader();
  if (!reader) return NextResponse.json({ message: "Body required" }, { status: 400 });
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
   const { done, value } = await reader.read();
   if (done) break;
   size += value.length;
   if (size > 16384) { await reader.cancel(); return NextResponse.json({ message: "Submission too large" }, { status: 413 }); }
   chunks.push(value);
  }
  let body: unknown;
  try { body = JSON.parse(Buffer.concat(chunks).toString("utf8")); } catch { return NextResponse.json({ message: "Invalid JSON" }, { status: 400 }); }
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ message: "Please check the form fields." }, { status: 400 });
  const { name, email, phone, service, message, product, division } = parsed.data;
  const item = equipment.find(item => item.id === product);
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_FROM_EMAIL || !process.env.CONTACT_TO_EMAIL) {
   return NextResponse.json({ message: "Contact delivery is temporarily unavailable. Please email us directly." }, { status: 503 });
  }
  const response = await fetch("https://api.resend.com/emails", {
   method: "POST", headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
   body: JSON.stringify({ from: process.env.CONTACT_FROM_EMAIL, to: [process.env.CONTACT_TO_EMAIL], reply_to: email,
    subject: `BESS enquiry: ${service}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nDivision: ${division || "General enquiry"}\nEquipment: ${item?.name || "General enquiry"}\nService: ${service}\n\n${message}` }),
   signal: AbortSignal.timeout(10000),
  });
  if (!response.ok) return NextResponse.json({ message: "Unable to deliver your enquiry. Please try again or email us directly." }, { status: 502 });
  const receipt = await response.json() as {id?: string};
  if (!receipt.id) return NextResponse.json({ message: "Unable to confirm delivery. Please email us directly." }, {status: 502});
  return NextResponse.json({ message: "Enquiry accepted" });
 } catch {
  return NextResponse.json({ message: "Unable to process your enquiry" }, { status: 500 });
 }
}
