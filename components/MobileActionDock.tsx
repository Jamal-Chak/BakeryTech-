import { MessageCircle, Phone } from "lucide-react";
import { WhatsAppLink } from "./ContactLinks";
import { phoneHref } from "@/lib/site";

export default function MobileActionDock() {
  return <nav className="mobile-dock" aria-label="Quick contact">
    <WhatsAppLink><MessageCircle size={19} aria-hidden="true"/>WhatsApp</WhatsAppLink>
    <a href={phoneHref}><Phone size={18} aria-hidden="true"/>Call Direct</a>
  </nav>;
}
