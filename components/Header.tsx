"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import Brand from "./Brand";
import { SocialLinks, WhatsAppLink } from "./ContactLinks";
import { site, phoneHref } from "@/lib/site";
const links = [{name: "Home", href: "/"}, {name: "About Us", href: "/about"}, {name: "Bakery", href: "/bakery"}, {name: "Butchery", href: "/butchery"}, {name: "Catering", href: "/catering"}, {name: "Maintenance & Repair", href: "/services"}, {name: "Gallery", href: "/gallery"}, {name: "Contact", href: "/contact"}];
export default function Header() {
 const [open, setOpen] = useState(false);
 const pathname = usePathname();
 useEffect(() => { if (!open) return; const close = (event: KeyboardEvent) => {if (event.key === "Escape") {setOpen(false); document.getElementById("menu-toggle")?.focus();}}; window.addEventListener("keydown", close); return () => window.removeEventListener("keydown", close); }, [open]);
 return <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
  <div className="border-b border-slate-100"><div className="container mx-auto px-5 flex justify-between items-center min-h-11 gap-3">
   <p className="hidden sm:block text-xs font-medium text-slate-600">Supply. Install. Service. <span className="ml-2 text-secondary font-bold">Built for your business.</span></p>
   <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4"><a href={phoneHref} className="flex items-center gap-2 text-xs font-bold text-secondary"><Phone size={13} aria-hidden="true"/>{site.phoneDisplay}</a><SocialLinks/></div>
  </div></div>
  <div className="container mx-auto px-5 flex justify-between items-center gap-5 py-4">
   <Brand/>
   <nav aria-label="Main navigation" className="hidden xl:flex items-center gap-6">{links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} className={`text-sm font-semibold py-2 border-b-2 transition-colors ${pathname === link.href ? "border-primary text-primary" : "border-transparent text-secondary hover:text-primary"}`}>{link.name}</Link>)}</nav>
   <div className="flex items-center gap-3"><WhatsAppLink className="hidden sm:inline-flex items-center gap-2 bg-primary text-white px-4 py-3 rounded-md text-sm font-bold hover:bg-orange-800"><MessageCircle size={18} aria-hidden="true"/>WhatsApp Quote</WhatsAppLink>
    <button id="menu-toggle" type="button" className="xl:hidden p-2 text-secondary" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls={open ? "mobile-navigation" : undefined} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
   </div>
  </div>
  {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="xl:hidden border-t border-slate-100 px-5 py-4 max-h-[70vh] overflow-auto">{links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={pathname === link.href ? "page" : undefined} className={`block px-3 py-3 font-semibold rounded-md ${pathname === link.href ? "text-primary bg-orange-50" : "text-secondary"}`}>{link.name}</Link>)}<WhatsAppLink className="btn-primary mt-3 w-full justify-center"><MessageCircle size={18} aria-hidden="true"/>Get a Quote on WhatsApp</WhatsAppLink></nav>}
 </header>;
}
