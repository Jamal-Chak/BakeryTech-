import DivisionCards from "@/components/DivisionCards";
import { CTA } from "@/components/CardsAndCTA";
export default function EquipmentPage() {
 return <><section className="bg-[#f0f3f3] py-14 md:py-20"><div className="container mx-auto px-5"><p className="eyebrow text-primary mb-4">BESS equipment catalog</p><h1 className="text-4xl md:text-6xl font-bold tracking-tight text-secondary max-w-3xl">Commercial equipment.<br/>Three specialist divisions.</h1><p className="text-lg text-slate-600 leading-relaxed mt-6 max-w-2xl">Find machinery for your bakery, butchery or food service business. Explore a division, then talk to us about the right equipment for your operation.</p></div></section><section className="section-space"><div className="container mx-auto px-5"><h2 className="section-title mb-9">Choose your division.</h2><DivisionCards/></div></section><CTA/></>;
}
