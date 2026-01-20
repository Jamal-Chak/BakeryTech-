"use client";

import { use } from "react";
import { equipment } from "@/lib/data";
import { CTA } from "@/components/CardsAndCTA";
import { ArrowLeft, Box, Check, MessageSquare, Info } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function EquipmentDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const item = equipment.find(e => e.id === id);

    if (!item) {
        notFound();
    }

    return (
        <div className="pt-32">
            <section className="pb-20">
                <div className="container mx-auto px-4">
                    <Link
                        href="/equipment"
                        className="inline-flex items-center gap-2 text-primary font-bold mb-10 hover:translate-x-1 transition-transform"
                    >
                        <ArrowLeft size={20} />
                        Back to Catalog
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Image Gallery Placeholder */}
                        <div className="space-y-6">
                            <div className="bg-slate-100 rounded-[3rem] aspect-square flex items-center justify-center text-gray-300 relative overflow-hidden border border-gray-100 shadow-inner">
                                <Box size={200} className="opacity-10" />
                                <span className="absolute bottom-10 bg-white/80 backdrop-blur px-6 py-2 rounded-full text-sm font-bold text-gray-500 shadow-sm">
                                    High-Resolution Product Image
                                </span>
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="bg-slate-50 aspect-square rounded-2xl border border-slate-100 flex items-center justify-center text-gray-400">
                                        <Box size={24} className="opacity-10" />
                                    </div>
                                ))}
                            </div>
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

                            <div className="bg-secondary p-8 rounded-[3rem] text-white space-y-6 shadow-xl">
                                <h4 className="text-2xl font-bold">Interested in this unit?</h4>
                                <p className="text-white/70">
                                    Get a customized quote including installation and a 12-month maintenance plan.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href="/contact"
                                        className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform text-center flex-grow"
                                    >
                                        Enquire for Pricing
                                    </Link>
                                    <Link
                                        href="https://wa.me/27000000000"
                                        target="_blank"
                                        className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all text-center flex items-center justify-center gap-2 flex-grow"
                                    >
                                        <MessageSquare size={20} />
                                        WhatsApp Info
                                    </Link>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-gray-100 grid grid-cols-2 gap-8 text-center sm:text-left">
                                <div>
                                    <h5 className="font-bold text-secondary">Availability</h5>
                                    <p className="text-green-500 font-medium pt-1">In Stock / Dispatch 48h</p>
                                </div>
                                <div>
                                    <h5 className="font-bold text-secondary">Warranty</h5>
                                    <p className="text-gray-500 font-medium pt-1">24 Months Parts & Labor</p>
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
