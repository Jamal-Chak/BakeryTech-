"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function ServiceCard({ title, description, slug, icon: Icon }: any) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-xl transition-all"
        >
            <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-primary">
                <Icon size={32} />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-4">{title}</h3>
            <p className="text-gray-600 mb-8 flex-grow leading-relaxed">{description}</p>
            <Link
                href={`/services/${slug}`}
                className="text-primary font-bold flex items-center gap-2 group"
            >
                Learn More
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
        </motion.div>
    );
}

export function CTA() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="bg-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl shadow-primary/20">
                    {/* Decorative Circles */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                                Ready to optimize your bakery operations?
                            </h2>
                            <p className="text-white/80 text-lg leading-relaxed max-w-lg">
                                Don&apos;t wait for a breakdown. Join hundreds of South African bakeries that trust BakeTech Solutions for their maintenance needs.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Free Initial Consultation",
                                    "24/7 Breakdown Assistance",
                                    "Certified Technical Team",
                                    "Genuine Spare Parts Guarantee"
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-white/90 font-medium">
                                        <CheckCircle2 size={20} className="text-secondary opacity-60" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                            <Link
                                href="/contact"
                                className="bg-secondary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform text-center"
                            >
                                Request a Service
                            </Link>
                            <Link
                                href="tel:+27000000000"
                                className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform text-center shadow-lg"
                            >
                                Call: +27 XX XXX XXXX
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
