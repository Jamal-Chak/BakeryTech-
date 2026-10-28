import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { divisions } from "@/lib/divisions";
import EquipmentIllustration from "./EquipmentIllustration";
export default function DivisionCards() {
 return <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{divisions.map(division => <Link href={`/${division.slug}`} key={division.slug} className="group flex flex-col border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-primary hover:shadow-xl transition-all duration-300 focus-visible:outline-primary">
  <div className="relative bg-[#f0f2f2] px-6 pt-6 overflow-hidden"><span className="text-xs font-bold tracking-widest text-slate-600">DIVISION / {division.number}</span><EquipmentIllustration division={division.slug} className="w-full text-secondary group-hover:scale-105 transition-transform duration-500"/></div>
  <div className="p-7 flex flex-col flex-1"><h3 className="text-2xl font-bold tracking-tight text-secondary mb-3">{division.title}</h3><p className="text-slate-600 leading-relaxed mb-6 flex-1">{division.description}</p>{division.slug === "butchery" && <figure className="mb-5"><div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-100"><Image src="/images/butchery/butchery-equipment-illustrative.png" alt="Illustrative commercial bandsaw, meat mincer and sausage filler" fill sizes="(max-width: 767px) 100vw, 33vw" className="object-cover"/></div><figcaption className="text-xs text-slate-600 mt-2">AI-generated equipment illustration</figcaption></figure>}<span className="flex justify-between items-center text-sm font-bold text-primary">Explore {division.name.toLowerCase()} equipment<ArrowUpRight size={20} aria-hidden="true"/></span></div>
 </Link>)}</div>;
}
