"use client";

import Image from "next/image";
import * as galleryAdditions from "@/lib/gallery-additions";
import { useState, useEffect, useRef } from "react";
import { CTA } from "@/components/CardsAndCTA";

// Using a subset of images for the gallery initially
const galleryImages = [
    { id: 1, src: "/images/hero/hero-main.jpg", category: "production", alt: "Industrial Production Line" },
    { id: 2, src: "/images/equipment/mixers/spiral-mixer-industrial.jpg", category: "equipment", alt: "Industrial Spiral Mixer" },
    { id: 3, src: "/images/equipment/mixers/planetary-mixer-silver.jpg", category: "equipment", alt: "Planetary Mixer" },
    { id: 4, src: "/images/equipment/ovens/deck-oven-3-tier.jpg", category: "equipment", alt: "Industrial 3-Deck Oven" },
    { id: 5, src: "/images/equipment/ovens/industrial-rack-oven.jpg", category: "equipment", alt: "Industrial Rotary Rack Oven" },
    { id: 6, src: "/images/equipment/ovens/rack-oven-polin.jpg", category: "equipment", alt: "Polin Rack Oven" },
    { id: 7, src: "/images/equipment/mixers/hobart-legacy-mixer.jpg", category: "equipment", alt: "Hobart Legacy Mixer" },
    { id: 8, src: "/images/equipment/dough-handling/dough-sheeter-floor.jpg", category: "equipment", alt: "Conveyor Dough Sheeter" },
    { id: 9, src: "/images/equipment/cooling/cooling-rack-multi-tier.jpg", category: "equipment", alt: "Multi-Tier Stainless Steel Rack" },
    { id: 10, src: "/images/equipment/slicers/bread-slicer-silver.jpg", category: "equipment", alt: "Industrial Bread Slicer" },
    { id: 11, src: "/images/equipment/mixers/vema-mixer-silver.jpg", category: "equipment", alt: "Vema Planetary Mixer" },
    ...galleryAdditions.additionalGalleryImages,
];

const categories = [
    { id: "all", label: "All Images" },
    { id: "production", label: "Production Lines" },
    { id: "equipment", label: "Equipment" },
    { id: "bakery-floor", label: "Bakery Floor" },
    { id: "installations", label: "Installations" },
    { id: "warehouse", label: "Warehouse Inventory" },
    { id: "butchery", label: "Butchery" },
    { id: "delivery", label: "Delivery Highlights" },
];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

    const dialogRef = useRef<HTMLDialogElement>(null);
    const isOpen = selectedImage !== null;

    const filteredImages = activeCategory === "all"
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    useEffect(() => {
        if (!isOpen) return;
        const previous = document.activeElement as HTMLElement | null;
        const dialog = dialogRef.current;
        dialog?.showModal();
        const overflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            dialog?.close();
            document.body.style.overflow = overflow;
            previous?.focus();
        };
    }, [isOpen]);

    const cycle = (direction: number) => {
        if (!selectedImage) return;
        const index = filteredImages.findIndex(image => image.id === selectedImage.id);
        setSelectedImage(filteredImages[(index + direction + filteredImages.length) % filteredImages.length]);
    };

    return (
        <div className="gallery-page">
            {/* Hero Section */}
            <section className="page-banner py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                        <p className="eyebrow text-primary mb-5">Equipment &bull; Installations &bull; Operations</p>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-secondary mb-6 leading-tight">
                            Bakery <span className="text-primary">Gallery</span>
                        </h1>
                        <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
                            Explore our world of industrial bakery equipment and successful installations. See the quality and scale of our operations.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 pb-8"><h2 className="text-2xl font-bold text-secondary mb-3">More from BESS Commercial Equipment</h2><p className="text-slate-600 leading-relaxed max-w-3xl">Browse equipment, installations, workshop and warehouse inventory imagery, and delivery highlights. All original site photos are included. New illustrations are clearly labelled and do not represent actual stock or completed projects.</p></div>

            {/* Filter Buttons */}
            <section className="gallery-filters pb-12 border-b border-gray-100 sticky top-24 z-30 bg-white/80 backdrop-blur-md">
                <div className="container mx-auto px-4 flex flex-wrap gap-4">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            aria-pressed={activeCategory === cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-6 py-3 rounded-full font-bold transition-all ${activeCategory === cat.id
                                ? "bg-primary text-white shadow-lg shadow-primary/20"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
                    <div className="gallery-editorial-grid">
                        {filteredImages.map((image) => (
                            <button
                                type="button" 
                                aria-label={`View ${image.alt}`}
                                aria-labelledby={galleryAdditions.generatedMedia[image.src] ? `gallery-badge-${image.id} gallery-caption-${image.id}` : undefined}
                                key={image.id}
                                className="gallery-tile group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                                onClick={() => setSelectedImage(image)}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    {galleryAdditions.generatedMedia[image.src] && <span id={`gallery-badge-${image.id}`} className="absolute top-3 left-3 right-3 bg-white/95 text-secondary text-xs font-bold rounded-md px-3 py-2 text-left">{galleryAdditions.generatedMedia[image.src]}</span>}
                                    <span id={galleryAdditions.generatedMedia[image.src] ? `gallery-caption-${image.id}` : undefined} className="inline-block px-4 py-2 bg-white/90 backdrop-blur rounded-lg text-secondary font-bold text-sm shadow-lg">
                                        {image.alt}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {selectedImage && (
                <dialog ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="lightbox-caption"
                    onCancel={() => setSelectedImage(null)}
                    onClick={event => { if (event.target === event.currentTarget) setSelectedImage(null); }}
                    onKeyDown={event => {
                        if (event.key === "Escape") { event.preventDefault(); setSelectedImage(null); }
                        if (event.key === "ArrowLeft") { event.preventDefault(); cycle(-1); }
                        if (event.key === "ArrowRight") { event.preventDefault(); cycle(1); }
                    }}
                    className="fixed inset-0 m-auto w-[95vw] max-w-6xl max-h-[95vh] rounded-2xl p-4 bg-slate-950 text-white backdrop:bg-black/80">
                    <div className="flex justify-between items-center gap-4 mb-4">
                        <p id="lightbox-caption" aria-live="polite">{selectedImage.alt}</p>
                        <button type="button" autoFocus aria-label="Close image viewer" onClick={() => setSelectedImage(null)} className="p-3 rounded-lg bg-white/10">Close</button>
                    </div>
                    
                    <div className="relative h-[65vh]">
                        <Image src={selectedImage.src} alt={selectedImage.alt} fill sizes="95vw" className="object-contain" />
                    </div>
                    <div className="flex justify-between mt-4">
                        <button type="button" onClick={() => cycle(-1)} className="p-3 rounded-lg bg-white/10">Previous image</button>
                        <button type="button" onClick={() => cycle(1)} className="p-3 rounded-lg bg-white/10">Next image</button>
                    </div>
                </dialog>
            )}

            <CTA />
        </div>
    );
}