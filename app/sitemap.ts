import type { MetadataRoute } from "next";
import { services, equipment } from "@/lib/data";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
 return ["", "/bakery", "/butchery", "/catering", "/services", "/equipment", "/gallery", "/about", "/contact", ...services.map(s => `/services/${s.slug}`), ...equipment.map(e => `/equipment/${e.id}`)].map(path => ({url: `${site.url}${path}`, changeFrequency: "monthly", priority: path ? 0.7 : 1}));
}
