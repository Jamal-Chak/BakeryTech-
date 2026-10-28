import { Facebook, Linkedin, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { site, whatsappHref } from "@/lib/site";
export function WhatsAppLink({children, className = "", label}: {children: ReactNode; className?: string; label?: string}) {
 return <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label={label} className={className}>{children}</a>;
}
export function SocialLinks({ dark = false }: {dark?: boolean}) {
 return <div className="flex items-center gap-2">
  {[{name: "LinkedIn", href: site.linkedin, Icon: Linkedin}, {name: "Facebook", href: site.facebook, Icon: Facebook}, {name: "WhatsApp", href: whatsappHref, Icon: MessageCircle}].map(({name, href, Icon}) => <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={`BESS on ${name}`} className={`inline-flex items-center justify-center w-10 h-10 rounded-md border transition-colors ${dark ? "border-white/20 text-white hover:bg-white/10" : "border-slate-200 text-secondary hover:bg-slate-100"}`}><Icon size={17} aria-hidden="true"/></a>)}
 </div>;
}
