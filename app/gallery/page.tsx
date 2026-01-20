"use client";

import Image from "next/image";
import { useState } from "react";
import { CTA } from "@/components/CardsAndCTA";

// Using a subset of images for the gallery initially
const galleryImages = [
    { id: 1, src: "/images/hero/hero-main.jpg", category: "production", alt: "Industrial Production Line" },
    { id: 2, src: "/images/equipment/mixers/spiral-mixer-industrial.jpg", category: "equipment", alt: "Industrial Spiral Mixer" },
    { id: 3, src: "/images/equipment/mixers/planetary-mixer-silver.jpg", category: "equipment", alt: "Planetary Mixer" },
    { id: 4, src: "/images/gallery/bakery-floor/baked-bread-loaves.jpg", category: "bakery-floor", alt: "Freshly Baked Bread" },
    { id: 5, src: "/images/equipment/ovens/rack-oven-polin.jpg", category: "equipment", alt: "Polin Rotary Rack Oven" },
    { id: 6, src: "/images/equipment/ovens/deck-oven-3-tier.jpg", category: "equipment", alt: "3-Tier Deck Oven" },
    { id: 7, src: "/images/equipment/mixers/hobart-legacy-mixer.jpg", category: "equipment", alt: "Hobart Legacy Mixer" },
    { id: 8, src: "/images/equipment/dough-handling/dough-sheeter-conveyor.jpg", category: "equipment", alt: "Conveyor Dough Sheeter" },
    { id: 9, src: "/images/gallery/bakery-floor/small-bakery-setup.jpg", category: "bakery-floor", alt: "Complete Bakery Setup" },
    { id: 10, src: "/images/equipment/slicers/white-bread-slicer.jpg", category: "equipment", alt: "Automatic Bread Slicer" },
    { id: 11, src: "/images/equipment/mixers/spiral-mixer-family.jpg", category: "equipment", alt: "Spiral Mixer Range" },
];

const categories = [
    { id: "all", label: "All Images" },
    { id: "production", label: "Production Lines" },
    { id: "equipment", label: "Equipment" },
    { id: "bakery-floor", label: "Bakery Floor" },
];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

    const filteredImages = activeCategory === "all"
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    return (
        <div className="pt-32">
            {/* Hero Section */}
            <section className="pb-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-secondary mb-6 leading-tight">
                            Bakery <span className="text-primary">Gallery</span>
                        </h1>
                        <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
                            Explore our world of industrial bakery equipment and successful installations. See the quality and scale of our operations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Buttons */}
            <section className="pb-12 border-b border-gray-100 sticky top-24 z-30 bg-white/80 backdrop-blur-md">
                <div className="container mx-auto px-4 flex flex-wrap gap-4">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-6 py-3 rounded-full font-bold transition-all ${activeCategory === cat.id
                                ? "bg-primary text-white shadow-lg shadow-primary/20"
                                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </section>

            {/* Image Grid */}
            <section className="py-20 bg-slate-50 min-h-screen">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredImages.map((image) => (
                            <div
                                key={image.id}
                                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                                onClick={() => setSelectedImage(image)}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="inline-block px-4 py-2 bg-white/90 backdrop-blur rounded-lg text-secondary font-bold text-sm shadow-lg">
                                        {image.alt}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative w-full max-w-6xl aspect-video rounded-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            fill
                            className="object-contain"
                            quality={100}
                        />
                        <button
                            className="absolute top-4 right-4 text-white hover:text-primary transition-colors bg-black/50 hover:bg-black/70 rounded-full p-2"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                    <div className="absolute bottom-8 text-white text-xl font-medium tracking-wide">
                        {selectedImage.alt}
                    </div>
                </div>
            )}

            <CTA />
        </div>
    );
}
