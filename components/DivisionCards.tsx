import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { divisions } from "@/lib/divisions";

export default function DivisionCards() {
  const divisionImages: Record<string, { src: string; alt: string }> = {
    bakery: { src: "/images/equipment/ovens/industrial-rack-oven.jpg", alt: "Industrial rotary rack oven" },
    butchery: { src: "/images/butchery/butchery-equipment-illustrative.png", alt: "Heavy-duty commercial butchery equipment" },
    services: { src: "/images/equipment/mixers/spiral-mixer-industrial.jpg", alt: "Industrial workshop engineering" },
  };
  return <div className="division-editorial-list">{divisions.map(division => {
    const image = divisionImages[division.slug];
    return <article key={division.slug} className={`division-editorial division-editorial-${division.slug}`}>
      <div className="division-editorial-copy"><span className="division-editorial-number" aria-hidden="true">{division.number}</span><p className="eyebrow">DIVISION / {division.number}</p><h3>{division.title}</h3><p className="division-editorial-description">{division.description}</p><Link href={`/${division.slug}`} className="division-editorial-link">Explore {division.name.toLowerCase()} equipment<span><ArrowUpRight size={25} aria-hidden="true"/></span></Link></div>
      <div className="division-editorial-media"><div className="division-editorial-photo"><Image src={image.src} alt={image.alt} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover"/></div></div>
    </article>;
  })}</div>;
}

