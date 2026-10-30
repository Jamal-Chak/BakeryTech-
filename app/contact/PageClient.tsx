"use client";
import { site, phoneHref, whatsappHref } from "@/lib/site";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema as formSchema, type ContactValues as FormValues } from "@/lib/contact-schema";
import { divisions, type DivisionSlug } from "@/lib/divisions";
import { WhatsAppLink } from "@/components/ContactLinks";
import { equipment } from "@/lib/data";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage({ productId, division, catalog = false }: { productId?: string; division?: DivisionSlug; catalog?: boolean }) {
    const product = equipment.find(item => item.id === productId);
    const [errorMessage, setErrorMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [whatsappFallback, setWhatsAppFallback] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: { product: product?.id || "", division: division || "", service: catalog ? "catalog" : product ? "other" : undefined, message: catalog ? `Please send me the BESS ${division || "commercial"} equipment catalog.` : "" },
    });

    const onSubmit = async (data: FormValues) => {
        setStatus("loading");
        setErrorMessage("");
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                if (result.delivery === "whatsapp-fallback") {
                    setWhatsAppFallback(true);
                }
                setStatus("success");
                reset({ product: product?.id || "", division: division || "", service: catalog ? "catalog" : product ? "other" : undefined });
            } else {
                const result = await response.json();
                setErrorMessage(result.message || "Unable to send your enquiry.");
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <div className="pt-12 md:pt-16">
            <section className="detail-surface pb-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <p className="eyebrow text-primary">Benoni • Equipment & support</p>
                                <h1 className="text-5xl md:text-6xl font-extrabold text-secondary leading-tight">
                                    Get in <span className="text-primary">Touch</span>
                                </h1>
                                <p className="text-xl text-gray-500 max-w-lg leading-relaxed">
                                    Looking for bakery or butchery equipment? Request a catalog, discuss an installation or arrange technical support.
                                </p>
                            </div>

                            <WhatsAppLink className="btn-primary">Get a Quote on WhatsApp</WhatsAppLink>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {[
                                    { icon: Phone, title: "Phone", content: site.phoneDisplay, sub: "Service enquiries", href: phoneHref },
                                    { icon: Mail, title: "Email", content: site.email, sub: "General enquiries", href: `mailto:${site.email}` },
                                    { icon: MapPin, title: "Location", content: site.location, sub: "Benoni, Gauteng", href: `https://maps.google.com/?q=${encodeURIComponent(site.location)}` },
                                    { icon: MessageSquare, title: "WhatsApp", content: site.phoneDisplay, sub: "Equipment enquiries", href: whatsappHref }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary shrink-0">
                                            <item.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-secondary text-lg">{item.title}</h4>
                                            <a href={item.href} target={item.href.startsWith("https:") ? "_blank" : undefined} rel={item.href.startsWith("https:") ? "noopener noreferrer" : undefined} className="text-gray-600 font-medium break-all underline">{item.content}</a>
                                            <p className="text-gray-600 text-sm">{item.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-secondary p-8 rounded-xl text-white">
                                <h4 className="text-2xl font-bold mb-4">Areas We Service</h4>
                                <p className="text-white/70 mb-6 leading-relaxed">
                                    Contact us to confirm service availability in your region:
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {["Western Cape", "Gauteng", "Kwa-Zulu Natal", "Eastern Cape", "Free State"].map(area => (
                                        <span key={area} className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium">
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-enquiry-panel bg-white p-8 md:p-12 rounded-xl shadow-2xl border border-gray-100">
                            <AnimatePresence mode="wait">
                                {status === "success" ? (
                                    <motion.div
                                        key="success" role="status"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-20 space-y-6"
                                    >
                                        <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto text-green-600">
                                            <CheckCircle size={64} />
                                        </div>
                                        <h3 className="text-3xl font-bold text-secondary">Message Sent!</h3>
                                        {whatsappFallback ? (
                                            <p className="text-primary font-medium">
                                                Email delivery is not configured — we will contact you directly via WhatsApp at <span className="underline">{site.phoneDisplay}</span>.
                                            </p>
                                        ) : (
                                            <p className="text-gray-500">
                                                Thank you for contacting us. Our team will review your enquiry.
                                            </p>
                                        )}
                                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                            <WhatsAppLink className="btn-primary flex justify-center">
                                                <MessageSquare size={18} aria-hidden="true" />
                                                Get a Quote on WhatsApp
                                            </WhatsAppLink>
                                            <button
                                                onClick={() => setStatus("idle")}
                                                className="text-sm font-medium text-secondary underline"
                                            >
                                                Send another message
                                            </button>
                                        </div>
                                        <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-100 text-left text-sm text-slate-600 space-y-2">
                                            <p className="font-bold text-secondary">Direct contact details</p>
                                            <p>Phone: <a href={phoneHref} className="text-primary underline">{site.phoneDisplay}</a></p>
                                            <p>Email: <a href={`mailto:${site.email}`} className="text-primary underline">{site.email}</a></p>
                                            <p>Location: {site.location}</p>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit(onSubmit)}
                                        aria-busy={status === "loading"}
                                        className="space-y-6"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        {product && <p className="rounded-xl bg-slate-100 p-4 text-secondary">Enquiry about: <strong>{product.name}</strong></p>}
                                        <input type="hidden" {...register("product")} />
                                        <div className="hidden">
                                            <input {...register("honeypot")} tabIndex={-1} autoComplete="off" />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm font-bold text-secondary ml-1">Full Name</label>
                                                <input
                                                    {...register("name")}
                                                    autoComplete="name" id="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined}
                                                    placeholder="John Doe"
                                                    className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border transition-all focus:ring-4 focus:ring-primary/10 outline-none ${errors.name ? "border-red-500" : "border-slate-100 focus:border-primary"
                                                        }`}
                                                />
                                                {errors.name && <p id="name-error" role="alert" className="text-red-500 text-xs mt-1 ml-1">{errors.name.message}</p>}
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-bold text-secondary ml-1">Email Address</label>
                                                <input
                                                    {...register("email")}
                                                    type="email" autoComplete="email" id="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined}
                                                    placeholder="john@example.com"
                                                    className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border transition-all focus:ring-4 focus:ring-primary/10 outline-none ${errors.email ? "border-red-500" : "border-slate-100 focus:border-primary"
                                                        }`}
                                                />
                                                {errors.email && <p id="email-error" role="alert" className="text-red-500 text-xs mt-1 ml-1">{errors.email.message}</p>}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label htmlFor="phone" className="text-sm font-bold text-secondary ml-1">Phone Number</label>
                                                <input
                                                    {...register("phone")}
                                                    type="tel" autoComplete="tel" id="phone" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined}
                                                    placeholder="Your phone number, including country code"
                                                    className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border transition-all focus:ring-4 focus:ring-primary/10 outline-none ${errors.phone ? "border-red-500" : "border-slate-100 focus:border-primary"
                                                        }`}
                                                />
                                                {errors.phone && <p id="phone-error" role="alert" className="text-red-500 text-xs mt-1 ml-1">{errors.phone.message}</p>}
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="service" className="text-sm font-bold text-secondary ml-1">Service Required</label>
                                                <select
                                                    {...register("service")}
                                                    id="service" aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? "service-error" : undefined}
                                                    className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border transition-all focus:ring-4 focus:ring-primary/10 outline-none appearance-none ${errors.service ? "border-red-500" : "border-slate-100 focus:border-primary"
                                                        }`}
                                                >
                                                    <option value="">Select a service</option>
                                                    <option value="maintenance">Preventative Maintenance</option>
                                                    <option value="repair">Emergency Repair</option>
                                                    <option value="installation">Equipment Installation</option>
                                                    <option value="parts">Spare Parts Supply</option>
                                                    <option value="catalog">Equipment Catalog</option>
                                                    <option value="other">Other Enquiry</option>
                                                </select>
                                                {errors.service && <p id="service-error" role="alert" className="text-red-500 text-xs mt-1 ml-1">{errors.service.message}</p>}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="division" className="text-sm font-bold text-secondary ml-1">Equipment Division</label>
                                            <select id="division" {...register("division")} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-secondary">
                                                <option value="">Select a division (optional)</option>
                                                {divisions.map(item => <option key={item.slug} value={item.slug}>{item.name}</option>)}
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-bold text-secondary ml-1">Your Message</label>
                                            <textarea
                                                {...register("message")}
                                                    id="message" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined}
                                                rows={5}
                                                placeholder="Tell us about your requirements..."
                                                className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border transition-all focus:ring-4 focus:ring-primary/10 outline-none resize-none ${errors.message ? "border-red-500" : "border-slate-100 focus:border-primary"
                                                    }`}
                                            ></textarea>
                                            {errors.message && <p id="message-error" role="alert" className="text-red-500 text-xs mt-1 ml-1">{errors.message.message}</p>}
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={status === "loading"}
                                            className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-primary/90 transition-all disabled:opacity-70 shadow-lg shadow-primary/20"
                                        >
                                            {status === "loading" ? (
                                                <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send size={20} />
                                                </>
                                            )}
                                        </button>

                                        {status === "error" && (
                                            <div role="alert" className="bg-amber-50 border border-amber-200 p-5 rounded-xl text-amber-900 space-y-3">
                                                <div className="flex items-center gap-3">
                                                    <AlertCircle size={20} className="text-amber-600 shrink-0" />
                                                    <p className="text-sm font-semibold">{errorMessage || "Direct email delivery is temporarily unavailable. We're on standby to assist you directly."}</p>
                                                </div>
                                                <p className="text-xs text-amber-800">
                                                    You can connect with our sales and technical support team immediately via WhatsApp:
                                                </p>
                                                <WhatsAppLink className="inline-flex items-center gap-2 bg-primary text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-orange-800 transition-colors">
                                                    <MessageSquare size={16} aria-hidden="true" />
                                                    Chat on WhatsApp Now
                                                </WhatsAppLink>
                                            </div>
                                        )}
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-slate-100" aria-label="Business location map">
                <div className="container mx-auto px-4">
                    <p className="mb-4 text-secondary">Find us at {site.location}. Contact us to arrange a visit.</p>
                    <iframe title={`Map of ${site.location}`} src={`https://www.google.com/maps?q=${encodeURIComponent(site.location)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-[400px] border-0 rounded-xl" />
                </div>
            </section>
        </div>
    );
}
