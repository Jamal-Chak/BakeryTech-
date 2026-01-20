"use client";

import Image from "next/image";
import Hero from "@/components/Hero";
import { ServiceCard, CTA } from "@/components/CardsAndCTA";
import { Testimonials } from "@/components/EquipmentAndTestimonials";
import { services } from "@/lib/data";
import { ShieldCheck, Zap, Clock, ThumbsUp, Wrench, Settings, Package, Truck } from "lucide-react";

const icons = [Wrench, Zap, Package, Truck, Settings];

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm">Our Expertise</h2>
            <p className="text-4xl md:text-5xl font-extrabold text-secondary">Specialized Bakery Services</p>
            <p className="text-gray-500 text-lg">Comprehensive solutions keeps your bakery equipment reliable and efficient.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl bg-secondary aspect-[4/3] flex items-center justify-center relative group">
              <Image
                src="/images/home/industrial-mixer-row.jpg"
                alt="Reliable Bakery Equipment"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply pointer-events-none"></div>
            </div>
            {/* Overlay tag */}
            <div className="absolute top-10 -right-10 bg-white p-6 rounded-2xl shadow-xl max-w-[200px] border border-gray-100 hidden md:block">
              <p className="text-3xl font-bold text-primary">100%</p>
              <p className="text-sm font-medium text-gray-500">Service Guarantee</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm">Why BakeTech?</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-secondary leading-tight">Reliability You Can Build Your Business On</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Clock, title: "Rapid Response", desc: "Express emergency repairs for critical breakdowns." },
                { icon: ShieldCheck, title: "Quality Repairs", desc: "Expert technicians using genuine spare parts only." },
                { icon: ThumbsUp, title: "Expert Knowledge", desc: "Deep understanding of all major bakery equipment brands." },
                { icon: Settings, title: "Custom Solutions", desc: "Tailored maintenance plans for your specific needs." }
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-md text-primary">
                    <item.icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-secondary">{item.title}</h4>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brands Supported */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-400 font-bold uppercase tracking-widest text-xs mb-10">We Support All Major Brands Including</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Text-based placeholders for brands as logos are not provided */}
            <span className="text-2xl font-black text-secondary">TOMBAKE</span>
            <span className="text-2xl font-black text-secondary">MACADAMS</span>
            <span className="text-2xl font-black text-secondary">POLIN</span>
            <span className="text-2xl font-black text-secondary">RATIONAL</span>
            <span className="text-2xl font-black text-secondary">MIVE</span>
          </div>
        </div>
      </section>

      <Testimonials />
      <CTA />
    </div>
  );
}
