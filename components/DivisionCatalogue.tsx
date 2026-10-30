"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, SlidersHorizontal, Snowflake, Settings2, Flame, Layers3, Scissors } from "lucide-react";
import { divisions, type DivisionSlug } from "@/lib/divisions";
import { equipment } from "@/lib/data";
import { EquipmentCard } from "./EquipmentAndTestimonials";

const catalogueGroups = {
  bakery: [
    { id: "ovens", label: "Ovens", names: ["Industrial ovens"], Icon: Flame },
    { id: "mixers", label: "Mixers", names: ["Spiral mixers"], Icon: Settings2 },
    { id: "dough", label: "Dough preparation", names: ["Dough dividers", "Dough sheeters"], Icon: Layers3 },
    { id: "slicers", label: "Slicers", names: ["Bread slicers"], Icon: Scissors },
    { id: "provers", label: "Proving", names: ["Proving equipment"], Icon: Layers3 },
  ],
  butchery: [
    { id: "cutting", label: "Cutting", names: ["Meat bandsaws"], Icon: Scissors },
    { id: "processing", label: "Meat processing", names: ["Meat mincers", "Sausage fillers", "Meat tenderizers"], Icon: Settings2 },
    { id: "cold", label: "Cold storage", names: ["Cold rooms"], Icon: Snowflake },
  ],
  services: [
    { id: "support", label: "Support", names: ["Preventative maintenance", "Emergency repairs", "Installation & commissioning", "Spare parts supply", "Pan-African supply support"], Icon: Settings2 },
  ],
};

export default function DivisionCatalogue({ slug }: { slug: DivisionSlug }) {
  const [active, setActive] = useState("all");
  const resultsId = useId();
  const division = divisions.find(item => item.slug === slug)!;
  const groups = catalogueGroups[slug as keyof typeof catalogueGroups] || [];
  const ranges = division.range.filter(item => active === "all" || groups.find(group => group.names.includes(item.name))?.id === active);
  const products = equipment.filter(item => active === "all" || (item.id === "dough-sheeter-floor" ? "dough" : item.category) === active);

  return <>
    <section className="section-space catalogue-section" aria-labelledby={`${resultsId}-heading`}>
      <div className="container mx-auto px-5">
        <div className="catalogue-heading"><div><p className="eyebrow text-primary mb-3">Equipment range</p>
          <h2 id={`${resultsId}-heading`} className="section-title mb-4">{division.subtitle}</h2>
          <p className="text-slate-600 max-w-2xl leading-relaxed">Explore our {division.name.toLowerCase()} equipment range. Contact us to confirm models, specifications, pricing and availability for your operation.</p>
        </div><span className="catalogue-division-number" aria-hidden="true">{division.number}</span></div>
        <div className="catalogue-workspace"><aside className="catalogue-toolbar">
          <span className="catalogue-filter-label"><SlidersHorizontal size={15} aria-hidden="true"/>Browse by category</span>
          <div className="catalogue-filters" role="group" aria-label={`${division.name} equipment categories`}>
            {[{ id: "all", label: "All equipment" }, ...groups].map(group => <button type="button" key={group.id} aria-pressed={active === group.id} aria-controls={resultsId} onClick={() => setActive(group.id)}>{group.label}</button>)}
          </div>
        </aside>
        <div id={resultsId} className="catalogue-results">
          <p className="catalogue-result-count" role="status">{ranges.length} equipment {ranges.length === 1 ? "range" : "ranges"}{active !== "all" ? ` / ${groups.find(group => group.id === active)?.label}` : " / All categories"}</p>
          <div className="range-product-grid">
            {ranges.map(item => {
              const index = division.range.findIndex(range => range.name === item.name);
              const group = groups.find(group => group.names.includes(item.name))!;
              const Icon = group.Icon;
              return <article key={item.name} className="range-product-card technical-card">
                <div className="range-card-drawing"><span>{division.number} / {String(index + 1).padStart(2, "0")}</span><Icon size={64} strokeWidth={1} aria-hidden="true"/><span>{group.label}</span></div>
                <div className="range-card-content"><h3>{item.name}</h3><p>{item.description}</p>
                  <div className="spec-tags"><span>Commercial grade</span><span>Heavy-duty stainless steel</span></div>
                  <Link href={`/contact?division=${slug}`} className="range-card-enquiry">Enquire about equipment<ArrowUpRight size={18} aria-hidden="true"/></Link>
                </div>
              </article>;
            })}
          </div>
          {slug === "bakery" && <div className="bakery-product-section">
            <p className="eyebrow text-primary mb-3">Explore bakery machinery</p><h2 className="section-title mb-9">A closer look at the range.</h2>
            {products.length ? <div className="equipment-product-grid">{products.map(item => <EquipmentCard key={item.id} {...item}/>)}</div> : <p className="catalogue-empty">Contact us to discuss models, specifications and availability in this category.</p>}
          </div>}
        </div>
        </div>
      </div>
    </section>
  </>;
}
