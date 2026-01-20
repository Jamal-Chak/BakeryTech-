"use client";

import { use } from "react";
import { services } from "@/lib/data";
import { CTA } from "@/components/CardsAndCTA";
import { CheckCircle2, ArrowLeft, Construction, Clock, ShieldCheck, Zap, Users } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const service = services.find(s => s.slug === slug);

    if (!service) {
        notFound();
    }

    const icons = {
        "preventative-maintenance": Clock,
        "emergency-repairs": Zap,
        "equipment-installation": Construction,
        "spare-parts-supply": ShieldCheck,
    };

    const Icon = icons[slug as keyof typeof icons] || Construction;

    return (
        <div className="pt-32">
            <section className="pb-20">
                <div className="container mx-auto px-4">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-primary font-bold mb-10 hover:translate-x-1 transition-transform"
                    >
                        <ArrowLeft size={20} />
                        Back to Services
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8">
                            <div className="bg-primary/10 w-20 h-20 rounded-[2rem] flex items-center justify-center text-primary">
                                <Icon size={40} />
                            </div>

                            <div className="space-y-4">
                                <h1 className="text-5xl font-extrabold text-secondary leading-tight">
                                    {service.title}
                                </h1>
                                <p className="text-xl text-gray-500 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-secondary">Service Benefits</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Extended Equipment Lifespan",
                                        "Safety Standards Compliance",
                                        "Energy Efficiency Optimization",
                                        "Expert Technical Support",
                                        "Genuine Replacement Parts",
                                        "Detailed Service Reports"
                                    ].map((benefit) => (
                                        <div key={benefit} className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                            <CheckCircle2 size={24} className="text-primary shrink-0" />
                                            <span className="font-medium text-secondary">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-8 border-t border-gray-100 flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-primary/20 transition-all text-center flex-grow sm:flex-grow-0"
                                >
                                    Request a Quote
                                </Link>
                                <Link
                                    href="https://wa.me/27000000000"
                                    target="_blank"
                                    className="bg-green-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-green-600 transition-all text-center flex-grow sm:flex-grow-0"
                                >
                                    WhatsApp Us
                                </Link>
                            </div>
                        </div>

                        <div className="space-y-12">
                            <div className="bg-secondary rounded-[3rem] aspect-[4/5] flex items-center justify-center text-white/5 relative overflow-hidden shadow-2xl">
                                <Icon size={250} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>

                            {/* Trust Indicators */}
                            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl space-y-6">
                                <h4 className="text-xl font-bold text-secondary">Why trust BakeTech?</h4>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="bg-slate-100 p-3 rounded-xl h-fit">
                                            <ShieldCheck className="text-secondary" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-secondary">Fully Insured</p>
                                            <p className="text-sm text-gray-500 text-sm">Comprehensive liability coverage for all on-site work.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="bg-slate-100 p-3 rounded-xl h-fit">
                                            <Users className="text-secondary" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-secondary">Expert Team</p>
                                            <p className="text-sm text-gray-400 text-sm">Each technician undergoes rigorous brand-specific training.</p>
                                        </div>
                                    </div>
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
