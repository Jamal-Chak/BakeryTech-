"use client";
import { site, whatsappHref, claims } from "@/lib/site";

import Image from "next/image";
import { use } from "react";
import { equipment } from "@/lib/data";
import { CTA } from "@/components/CardsAndCTA";
import { ArrowLeft, Check, MessageSquare, Info } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function EquipmentDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const item = equipment.find(e => e.id === id);
    const imgSrc = item?.image || "/images/equipment/ovens/industrial-rack-oven.jpg";

    if (!item) {
        notFound();
    }

    return (
        <div className="pt-12 md:pt-16">
            <section className="detail-surface pb-20">
                <div className="container mx-auto px-4">
                    <Link
                        href="/equipment"
                        className="inline-flex items-center gap-2 text-primary font-bold mb-10 hover:translate-x-1 transition-transform"
                    >
                        <ArrowLeft size={20} />
                        Back to Catalog
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-100">
                            <Image src={imgSrc} alt={item.name} fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-contain" priority />
                        </div>

                        {/* Content */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
                                    {item.category}
                                </div>
                                <h1 className="text-5xl font-extrabold text-secondary leading-tight">
                                    {item.name}
                                </h1>
                                <p className="text-xl text-gray-500 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-secondary flex items-center gap-2">
                                    <Info size={24} className="text-primary" />
                                    Specifications
                                </h3>
                                <div className="grid grid-cols-1 gap-3">
                                    {item.specs.map((spec, i) => (
                                        <div key={i} className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                                            <div className="bg-white p-2 rounded-lg shadow-sm">
                                                <Check size={18} className="text-primary" />
                                            </div>
                                            <span className="font-bold text-secondary">{spec}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-secondary p-8 rounded-xl text-white space-y-6 shadow-xl">
                                <h4 className="text-2xl font-bold">Interested in this unit?</h4>
                                <p className="text-white/70">
                                    Ask for a quotation and discuss installation and maintenance options.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href={`/contact?product=${encodeURIComponent(item.id)}`}
                                        className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform text-center flex-grow"
                                    >
                                        Enquire for Pricing
                                    </Link>
                                    <Link
                                        href={whatsappHref}
                                        target={site.whatsapp ? "_blank" : undefined} rel={site.whatsapp ? "noopener noreferrer" : undefined}
                                        className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all text-center flex items-center justify-center gap-2 flex-grow"
                                    >
                                        <MessageSquare size={20} />
                                        {site.whatsapp ? "WhatsApp Info" : "Contact Us"}
                                    </Link>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-gray-100 grid grid-cols-2 gap-8 text-center sm:text-left">
                                <div>
                                    <h5 className="font-bold text-secondary">Availability</h5>
                                    <p className="text-green-700 font-medium pt-1">{claims.availability}</p>
                                </div>
                                <div>
                                    <h5 className="font-bold text-secondary">Warranty</h5>
                                    <p className="text-gray-500 font-medium pt-1">{claims.warranty}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
}

