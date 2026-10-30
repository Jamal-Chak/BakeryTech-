"use client";
import { claims } from "@/lib/site";

import Image from "next/image";
import Link from "next/link";
import { Info, Star } from "lucide-react";
import { motion } from "framer-motion";



export function EquipmentCard({ name, description, id, image, specs = [] }: {name: string; description: string; id: string; image?: string; specs?: readonly string[]}) {
    const imgSrc = image || "/images/equipment/ovens/industrial-rack-oven.jpg";
    return (
        <div className="equipment-product-card technical-card bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="product-image-panel aspect-[4/3] bg-slate-900 relative overflow-hidden">
                <Image
                    src={imgSrc}
                    alt={name}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    
                />
            </div>
            <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-secondary">{name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                <div className="spec-tags"><span>Commercial equipment</span><span>Technical support</span>{specs.map(spec => <span key={spec}>{spec}</span>)}</div>
                <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                    <Link
                        href={`/equipment/${id}`}
                        className="text-secondary font-bold text-sm flex items-center gap-1.5 hover:text-primary transition-colors"
                    >
                        <Info size={16} />
                        Details
                    </Link>
                    <Link
                        href={`/contact?product=${encodeURIComponent(id)}`}
                        className="bg-primary/10 text-primary px-4 py-2 rounded-xl text-xs font-bold hover:bg-primary hover:text-white transition-all shadow-sm shadow-primary/10"
                    >
                        Enquire Now
                    </Link>
                </div>
            </div>
        </div>
    );
}

export function Testimonials() {
    const reviews = claims.testimonials;
    if (!reviews.length) return null;

    return (
        <section className="py-24 bg-slate-950 text-slate-100">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-primary font-bold uppercase tracking-widest text-sm">Testimonials</h2>
                    <p className="text-4xl md:text-5xl font-extrabold text-white">Trusted by SA&apos;s Finest Bakeries</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/10 flex flex-col gap-6"
                        >
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} className="fill-accent text-accent" />
                                ))}
                            </div>
                            <p className="text-lg text-white/80 leading-relaxed italic">
                                &quot;{review.content}&quot;
                            </p>
                            <div className="pt-4 border-t border-white/10">
                                <p className="font-bold text-white text-lg">{review.name}</p>
                                <p className="text-primary font-medium text-sm">{review.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
