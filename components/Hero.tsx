"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, Wrench, Hammer } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Available 24/7 for Emergency Repairs
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-secondary leading-tight">
                        Professional Bakery <br />
                        <span className="text-primary">Maintenance & Supply</span>
                    </h1>

                    <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                        Reliable, Fast, and Professional technical services for South African bakeries. We specialize in ovens, mixers, and industrial baking systems.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                            href="/contact"
                            className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                        >
                            Request a Quote
                            <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="tel:+27000000000"
                            className="bg-white text-secondary border-2 border-secondary/10 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all"
                        >
                            <Phone size={20} />
                            Call Now
                        </Link>
                    </div>

                    <div className="flex items-center gap-8 pt-6 border-t border-gray-200">
                        <div>
                            <p className="text-2xl font-bold text-secondary">15+</p>
                            <p className="text-sm text-gray-500 uppercase tracking-wider">Years Experience</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-secondary">500+</p>
                            <p className="text-sm text-gray-500 uppercase tracking-wider">Bakeries Served</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-secondary">24h</p>
                            <p className="text-sm text-gray-500 uppercase tracking-wider">Response Time</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative"
                >
                    <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
                        <img
                            src="/images/hero-bakery.jpg"
                            alt="Industrial Bakery"
                            className="w-full h-full object-cover"
                        />

                    </div>

                    <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-gray-100">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-xl">
                                <Wrench className="text-primary" />
                            </div>
                            <div>
                                <p className="font-bold text-secondary">Quality Certified</p>
                                <p className="text-xs text-gray-500">Industry Approved Technicians</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
