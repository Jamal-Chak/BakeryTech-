"use client";

import { equipment, equipmentCategories } from "@/lib/data";
import { EquipmentCard } from "@/components/EquipmentAndTestimonials";
import { CTA } from "@/components/CardsAndCTA";
import { useState } from "react";

export default function EquipmentPage() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredEquipment = activeCategory === "all"
        ? equipment
        : equipment.filter(e => e.category === activeCategory);

    return (
        <div className="pt-32">
            <section className="pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-secondary mb-6 leading-tight">
                            Premium Bakery <br />
                            <span className="text-primary">Equipment Supply</span>
                        </h1>
                        <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
                            Discover our range of high-performance industrial bakery equipment. We supply, install, and support everything you need for a modern bakery.
                        </p>
                    </div>
                </div>
            </section>

            {/* Categories Filter */}
            <section className="pb-12 border-b border-gray-100">
                <div className="container mx-auto px-4 flex flex-wrap gap-4">
                    <button
                        onClick={() => setActiveCategory("all")}
                        className={`px-6 py-3 rounded-full font-bold transition-all ${activeCategory === "all"
                                ? "bg-primary text-white shadow-lg shadow-primary/20"
                                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                            }`}
                    >
                        All Equipment
                    </button>
                    {equipmentCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-6 py-3 rounded-full font-bold transition-all ${activeCategory === cat.id
                                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                                }`}
                        >
                            {cat.title}
                        </button>
                    ))}
                </div>
            </section>

            {/* Equipment Grid */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    {filteredEquipment.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {filteredEquipment.map((item) => (
                                <EquipmentCard key={item.id} {...item} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-gray-300">
                            <p className="text-xl text-gray-400 font-medium">Coming Soon: More equipment being added to our catalog.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Brands Trust */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-secondary mb-12">Authorized Dealer of World-Class Brands</h2>
                    <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
                        <span className="text-xl font-black">POLIN</span>
                        <span className="text-xl font-black">SALVA</span>
                        <span className="text-xl font-black">TAGLIAVINI</span>
                        <span className="text-xl font-black">FERNETO</span>
                        <span className="text-xl font-black">JAC</span>
                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
}
