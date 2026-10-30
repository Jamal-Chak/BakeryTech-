"use client";
import Link from "next/link";
import { ArrowRight, MessageCircle, ArrowUpRight } from "lucide-react";
import { WhatsAppLink } from "./ContactLinks";
import { divisions } from "@/lib/divisions";
import EquipmentIllustration from "./EquipmentIllustration";
export default function Hero() {
 return <section className="relative bg-slate-950 text-slate-100 overflow-hidden">
  <div className="absolute inset-0 industrial-grid opacity-20 pointer-events-none" aria-hidden="true"/>
  <div className="container mx-auto px-5 py-16 md:py-24 relative grid lg:grid-cols-[1.25fr_1fr] gap-14 lg:gap-16 items-center">
   <div><p className="eyebrow text-orange-200 flex items-center gap-3"><span className="w-7 h-0.5 bg-orange-300"/>Equipment that works as hard as you do</p>
    <h1 className="mt-7 text-[2.8rem] sm:text-6xl xl:text-[4.4rem] font-bold tracking-[-0.045em] leading-[1.08]">BESS &mdash; Commercial <span className="text-orange-200">Bakery & Butchery</span> Equipment</h1>
    <p className="text-lg text-slate-200 leading-relaxed mt-7 max-w-xl">Your reliable partner for high-performance food service machinery, supply, installation, and technical servicing.</p>
    <div className="flex flex-col sm:flex-row gap-3 mt-9"><Link href="/equipment" className="btn-primary justify-center">Explore Catalog<ArrowRight size={18} aria-hidden="true"/></Link><WhatsAppLink className="inline-flex justify-center items-center gap-2 px-6 py-4 border border-white/40 rounded-md font-bold hover:bg-white/10 transition-colors"><MessageCircle size={19} aria-hidden="true"/>Chat on WhatsApp</WhatsAppLink></div>
    <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/20 pt-6 text-sm font-medium text-slate-200">{["Equipment supply", "Professional installation", "Ongoing servicing"].map(text => <span key={text} className="flex gap-2 items-center"><span className="h-1.5 w-1.5 bg-orange-300"/>{text}</span>)}</div>
   </div>
   <div className="space-y-3">{divisions.map(division => <Link key={division.slug} href={`/${division.slug}`} className="group flex items-center justify-between gap-4 px-5 py-3 rounded-lg bg-white text-secondary border border-white/20 hover:bg-orange-50 transition-colors">
    <div className="w-[52%]"><span className="eyebrow text-slate-600">{division.number} / BESS DIVISION</span><p className="font-bold text-xl sm:text-2xl mt-2">{division.name}</p><p className="text-xs sm:text-sm text-slate-600 mt-1">{division.subtitle}</p></div>
    <EquipmentIllustration division={division.slug} className="w-[38%] max-w-44 text-secondary"/><ArrowUpRight size={20} className="text-primary shrink-0" aria-hidden="true"/>
   </Link>)}<p className="text-xs text-slate-300 flex justify-between pt-2"><span>THREE DIVISIONS. ONE EQUIPMENT PARTNER.</span><span aria-hidden="true">BESS / ZA</span></p></div>
  </div>
 </section>;
}
