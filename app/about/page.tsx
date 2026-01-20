"use client";

import Image from "next/image";
import { CTA } from "@/components/CardsAndCTA";
import { BadgeCheck, Users, Target, Award, Construction } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
    const stats = [
        { label: "Years Experience", value: "15+" },
        { label: "Expert Technicians", value: "20+" },
        { label: "Clients Served", value: "1,200+" },
        { label: "Parts in Stock", value: "5,000+" },
    ];

    return (
        <div className="pt-32">
            <section className="pb-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-5xl md:text-6xl font-extrabold text-secondary leading-tight">
                                    Passionate About <br />
                                    <span className="text-primary">Bakery Engineering</span>
                                </h1>
                                <p className="text-xl text-gray-500 leading-relaxed">
                                    BakeTech Solutions was founded with a single mission: to provide unparalleled technical support to the South African baking industry.
                                </p>
                            </div>

                            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                                <p>
                                    Today, we are a leading provider of maintenance and equipment supply services, trusted by local artisanal boulangeries and large-scale industrial plants alike.
                                </p>
                                <p>
                                    Our team consists of highly skilled engineers and technicians who understand that in the bakery world, every hour of downtime means lost production. That&apos;s why we prioritize speed without ever compromising on quality.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-8 border-y border-gray-100">
                                {stats.map((stat, i) => (
                                    <div key={i} className="text-center sm:text-left">
                                        <p className="text-3xl font-extrabold text-secondary">{stat.value}</p>
                                        <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-slate-100 rounded-[4rem] aspect-square flex items-center justify-center relative overflow-hidden">
                                <Image
                                    src="/images/gallery/bakery-floor/small-bakery-setup.jpg"
                                    alt="Certified Bakery Setup"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent mix-blend-overlay pointer-events-none"></div>
                            </div>
                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 max-w-[240px]"
                            >
                                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                                    <BadgeCheck size={28} />
                                </div>
                                <h4 className="font-bold text-secondary text-lg">Certified Quality</h4>
                                <p className="text-gray-500 text-sm">Our work meets the highest international safety standards.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-secondary text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                        <h2 className="text-primary font-bold uppercase tracking-widest text-sm">Our Values</h2>
                        <p className="text-4xl md:text-5xl font-extrabold">The Principles That Drive Us</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: Target,
                                title: "Precision",
                                desc: "We don't believe in duct-tape fixes. We solve root causes with engineering precision.",
                            },
                            {
                                icon: Users,
                                title: "Partnership",
                                desc: "We view ourselves as an extension of your team, dedicated to your bakery's growth.",
                            },
                            {
                                icon: Award,
                                title: "Excellence",
                                desc: "We strive for excellence in every bolt tightened and every oven installed.",
                            }
                        ].map((value, i) => (
                            <div key={i} className="bg-white/5 p-12 rounded-[3rem] border border-white/10 space-y-6 hover:bg-white/10 transition-colors">
                                <div className="bg-primary p-4 rounded-2xl w-fit">
                                    <value.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold">{value.title}</h3>
                                <p className="text-white/60 leading-relaxed text-lg">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline / History */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-16">
                        <h2 className="text-4xl font-extrabold text-secondary text-center">Our Journey</h2>
                        <div className="space-y-12">
                            {[
                                { year: "2010", title: "The Beginning", desc: "BakeTech Solutions started as a small repair shop in Cape Town." },
                                { year: "2015", title: "National Expansion", desc: "Opened our first Gauteng branch to support the northern region." },
                                { year: "2020", title: "Direct Supply", desc: "Became authorized distributors for major international equipment brands." },
                                { year: "Today", title: "Industry Leader", desc: "Supporting over 1,200 bakeries across South Africa with 24/7 service." }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col md:flex-row gap-8 md:items-center">
                                    <div className="text-4xl font-black text-primary/20 md:w-32 shrink-0">{item.year}</div>
                                    <div className="h-0.5 bg-gray-100 flex-grow hidden md:block"></div>
                                    <div className="md:w-[400px]">
                                        <h4 className="text-xl font-bold text-secondary mb-2">{item.title}</h4>
                                        <p className="text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
}
