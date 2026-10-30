import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ArrowRight, MessageCircle, BookOpen } from "lucide-react";
import { WhatsAppLink } from "./ContactLinks";
export function ServiceCard({ title, description, slug, icon: Icon }: {title: string; description: string; slug: string; icon: LucideIcon}) {
 return <div className="service-editorial-card technical-card bg-white p-7 rounded-xl border border-slate-200 flex flex-col h-full hover:border-primary transition-colors"><span className="bg-orange-50 w-12 h-12 rounded-md flex items-center justify-center mb-6 text-primary"><Icon size={26} aria-hidden="true"/></span><h3 className="text-2xl font-bold text-secondary mb-4">{title}</h3><p className="text-slate-600 mb-7 flex-grow leading-relaxed">{description}</p><Link href={`/services/${slug}`} className="text-primary font-bold inline-flex items-center gap-2">Learn more<ArrowRight size={17} aria-hidden="true"/></Link></div>;
}
export function CTA() {
 return <section className="section-space"><div className="container mx-auto px-5"><div className="engineered-cta editorial-callout relative overflow-hidden">
  <p className="eyebrow mb-7">Let&apos;s get to work</p>
  <h2>Your next equipment partner.<br/>One conversation away.</h2>
  <div className="editorial-callout-footer"><p>Tell us what your business needs. We&apos;ll help with equipment selection, installation and ongoing support.</p><div className="editorial-callout-actions"><WhatsAppLink className="btn-primary justify-center"><MessageCircle size={18} aria-hidden="true"/>Get a Quote on WhatsApp</WhatsAppLink><Link href="/contact?request=catalog" className="flex justify-center items-center gap-2 text-sm font-bold py-3 px-4 hover:underline"><BookOpen size={17} aria-hidden="true"/>Request Equipment Catalog</Link></div></div>
 </div></div></section>;
}
