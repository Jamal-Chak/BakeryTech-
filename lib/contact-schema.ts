import { z } from "zod";
import { equipment } from "./data";
const line = (max: number) => z.string().trim().min(2).max(max).refine(v => !/[\x00-\x1f\x7f<>]/.test(v), "Use plain text without control characters");
export const contactSchema = z.object({
 name: line(120),
 email: z.string().trim().max(254).email(),
 phone: z.string().trim().min(10).max(30).regex(/^[+\d ()-]+$/, "Enter a valid phone number").refine(v => v.replace(/\D/g, "").length >= 10, "Enter at least 10 digits"),
 service: z.enum(["maintenance", "repair", "installation", "parts", "other", "catalog"]),
 message: z.string().trim().min(10).max(5000).refine(v => !/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f<>]/.test(v), "Use plain text without markup"),
 product: z.string().max(100).refine(v => !v || equipment.some(item => item.id === v), "Unknown equipment").optional(),
 division: z.enum(["", "bakery", "butchery", "catering"]).optional(),
 honeypot: z.string().max(0).optional(),
}).strict();
export type ContactValues = z.infer<typeof contactSchema>;
