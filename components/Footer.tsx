import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Brand from "./Brand";
import { SocialLinks, WhatsAppLink } from "./ContactLinks";
import { site, phoneHref } from "@/lib/site";
export default function Footer() {
 return <footer className="bg-secondary text-white pt-16 pb-7">
  <div className="container mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr] gap-10 pb-14">
   <div className="space-y-6"><Brand dark/><p className="text-slate-300 leading-relaxed max-w-xs text-sm">Heavy-duty equipment. Hands-on support. Supply, installation and servicing for the businesses that feed South Africa.</p><SocialLinks dark/></div>
   <div><h2 className="font-bold mb-5 text-lg">Our divisions</h2><ul className="space-y-3 text-slate-300 text-sm">{[{name:"Bakery equipment",href:"/bakery"},{name:"Butchery equipment",href:"/butchery"},{name:"Catering equipment",href:"/catering"},{name:"Explore catalog",href:"/equipment"}].map(link => <li key={link.href}><Link className="hover:text-white" href={link.href}>{link.name}</Link></li>)}</ul></div>
   <div><h2 className="font-bold mb-5 text-lg">Equipment support</h2><ul className="space-y-3 text-slate-300 text-sm"><li><Link href="/services">Maintenance & repair</Link></li><li><Link href="/services/equipment-installation">Installation</Link></li><li><Link href="/services/spare-parts-supply">Spare parts</Link></li><li><Link href="/about">About BESS</Link></li><li><Link href="/contact">Contact us</Link></li></ul></div>
   <div className="space-y-5"><h2 className="font-bold text-lg">Let&apos;s talk equipment</h2><a href={phoneHref} className="flex items-center gap-3 text-slate-200"><Phone size={17} aria-hidden="true"/>{site.phoneDisplay}</a><a href={`mailto:${site.email}`} className="flex items-center gap-3 text-sm text-slate-200 break-all"><Mail size={17} aria-hidden="true" className="shrink-0"/>{site.email}</a><p className="flex items-start gap-3 text-sm text-slate-200"><MapPin size={17} aria-hidden="true" className="shrink-0"/>{site.location}</p><WhatsAppLink className="inline-flex items-center gap-2 text-sm font-bold text-orange-200 border-b border-orange-200 pb-1">Get a Quote on WhatsApp<ArrowUpRight size={16} aria-hidden="true"/></WhatsAppLink></div>
  </div>
  <div className="container mx-auto px-5 border-t border-white/15 pt-7 flex flex-col md:flex-row justify-between gap-3 text-xs text-slate-300"><p>&copy; 2026 BESS Commercial Equipment. All rights reserved.</p><p>BESS Commercial Equipment is a trading brand of BESS (Pty) Ltd.</p></div>
 </footer>;
}
