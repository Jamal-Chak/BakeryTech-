import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Wrench, MessageCircle, Check } from "lucide-react";
import { divisions, type DivisionSlug } from "@/lib/divisions";
import DivisionCatalogue from "./DivisionCatalogue";
import { WhatsAppLink } from "./ContactLinks";
import { CTA } from "./CardsAndCTA";

const divisionHeroImages: Record<string, { src: string; alt: string }> = {
  bakery: { src: "/images/equipment/ovens/industrial-rack-oven.jpg", alt: "Industrial rotary rack ovens in a commercial bakery" },
  butchery: { src: "/images/butchery/butchery-equipment-illustrative.png", alt: "Heavy-duty commercial butchery equipment" },
  services: { src: "/images/equipment/mixers/spiral-mixer-industrial.jpg", alt: "Commercial spiral mixer being serviced in the BESS workshop" },
};

export default function DivisionPage({slug}: {slug: DivisionSlug}) {
 const division = divisions.find(item => item.slug === slug)!;
 const heroImage = divisionHeroImages[slug] ?? divisionHeroImages.bakery;
 return <>
  <section className="page-banner bg-[#f0f3f3] py-12 md:py-16"><div className="container mx-auto px-5"><nav aria-label="Breadcrumb" className="text-sm text-slate-600 mb-9"><Link href="/">Home</Link><span aria-hidden="true" className="mx-3">/</span><span>{division.name}</span></nav><div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center"><div><p className="eyebrow text-primary mb-4">BESS / Division {division.number}</p><h1 className="text-4xl md:text-6xl font-bold tracking-tight text-secondary leading-[1.1]">Commercial {division.name}<br/><span className="text-primary">Equipment{slug === "bakery" ? " & Services" : ""}</span></h1><p className="text-lg text-slate-600 leading-relaxed max-w-xl mt-6">{division.intro}</p><div className="flex flex-col sm:flex-row gap-3 mt-8"><WhatsAppLink className="btn-primary justify-center"><MessageCircle size={18} aria-hidden="true"/>Get a Quote on WhatsApp</WhatsAppLink><Link href={`/contact?division=${slug}&request=catalog`} className="border border-slate-300 rounded-md text-secondary px-5 py-4 text-sm font-bold text-center hover:bg-white">Request Equipment Catalog</Link></div></div><div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-slate-100"><Image src={heroImage.src} alt={heroImage.alt} fill sizes="(max-width: 1023px) 100vw, 45vw" className="object-cover"/></div></div></div></section>
  <DivisionCatalogue slug={slug}/>
  <section className="bg-slate-950 text-slate-100 py-12"><div className="container mx-auto px-5 grid md:grid-cols-[auto_1fr_auto] gap-6 items-center"><Wrench size={36} className="text-orange-200" aria-hidden="true"/><div><h2 className="text-2xl font-bold">Support beyond the sale.</h2><p className="text-slate-200 mt-3 leading-relaxed">Installation, maintenance, spare parts and repair callouts for your {division.name.toLowerCase()} operation.</p><div className="flex flex-wrap gap-5 text-sm mt-4">{["Supply", "Install", "Service"].map(text => <span key={text} className="inline-flex items-center gap-2"><Check size={16} aria-hidden="true"/>{text}</span>)}</div></div><Link href="/services" className="font-bold text-orange-200 inline-flex items-center gap-2">Maintenance & repair<ArrowRight size={18} aria-hidden="true"/></Link></div></section>
  <CTA/>
 </>;
}
