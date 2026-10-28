"use client";

import { services } from "@/lib/data";
import { ServiceCard, CTA } from "@/components/CardsAndCTA";
import { Wrench, Zap, Package, Truck, Settings } from "lucide-react";

const icons = [Wrench, Zap, Package, Truck, Settings];

export default function ServicesPage() {
    return (
        <div className="pt-12 md:pt-16">
            <section className="pb-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-secondary mb-6 leading-tight">
                            Keep Your Operation <br />
                            <span className="text-primary">Moving</span>
                        </h1>
                        <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
                            Installation, ongoing maintenance, spare parts and emergency repair callouts for bakery, butchery and catering equipment. Talk to BESS about minimising downtime and keeping your operation productive.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={service.slug}
                                {...service}
                                icon={icons[index % icons.length]}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Extra Info Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-secondary">Why Routine Maintenance Matters</h2>
                        <p className="text-gray-600 leading-relaxed">
                            In a busy bakery, butcher shop or commercial kitchen, equipment failure isn&apos;t just an inconvenience—it&apos;s a loss of revenue and customer trust. Our proactive approach identifies potential issues before they cause a shutdown.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Extended equipment lifespan",
                                "Reduced energy consumption",
                                "Higher product consistency",
                                "Minimized unplanned downtime",
                                "Compliance with safety regulations"
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-secondary font-medium">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-secondary rounded-[3rem] aspect-video flex items-center justify-center text-white/5 relative overflow-hidden">
                        <Settings size={150} />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
}
