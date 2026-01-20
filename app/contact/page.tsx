"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    service: z.string().min(1, "Please select a service"),
    message: z.string().min(10, "Message must be at least 10 characters"),
    honeypot: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormValues) => {
        setStatus("loading");
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("success");
                reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <div className="pt-32">
            <section className="pb-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h1 className="text-5xl md:text-6xl font-extrabold text-secondary leading-tight">
                                    Get in <span className="text-primary">Touch</span>
                                </h1>
                                <p className="text-xl text-gray-500 max-w-lg leading-relaxed">
                                    Have an equipment emergency or need a quote? Our team is ready to assist you.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {[
                                    { icon: Phone, title: "Phone", content: "+27 (0) XX XXX XXXX", sub: "24/7 Emergency Support" },
                                    { icon: Mail, title: "Email", content: "info@baketech.co.za", sub: "General Enquiries" },
                                    { icon: MapPin, title: "Location", content: "Cape Town", sub: "Serving South Africa" },
                                    { icon: MessageSquare, title: "WhatsApp", content: "+27 XX XXX XXXX", sub: "Quick Response" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary shrink-0">
                                            <item.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-secondary text-lg">{item.title}</h4>
                                            <p className="text-gray-600 font-medium">{item.content}</p>
                                            <p className="text-gray-400 text-sm">{item.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-secondary p-8 rounded-[2.5rem] text-white">
                                <h4 className="text-2xl font-bold mb-4">Areas We Service</h4>
                                <p className="text-white/70 mb-6 leading-relaxed">
                                    We provide nationwide coverage with primary technical hubs in the following regions:
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
                        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100">
                            <AnimatePresence mode="wait">
                                {status === "success" ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-20 space-y-6"
                                    >
                                        <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto text-green-600">
                                            <CheckCircle size={64} />
                                        </div>
                                        <h3 className="text-3xl font-bold text-secondary">Message Sent!</h3>
                                        <p className="text-gray-500">
                                            Thank you for contacting us. One of our technicians will get back to you shortly.
                                        </p>
                                        <button
                                            onClick={() => setStatus("idle")}
                                            className="text-primary font-bold underline"
                                        >
                                            Send another message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit(onSubmit)}
                                        className="space-y-6"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        <div className="hidden">
                                            <input {...register("honeypot")} tabIndex={-1} autoComplete="off" />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-secondary ml-1">Full Name</label>
                                                <input
                                                    {...register("name")}
                                                    placeholder="John Doe"
                                                    className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border transition-all focus:ring-4 focus:ring-primary/10 outline-none ${errors.name ? "border-red-500" : "border-slate-100 focus:border-primary"
                                                        }`}
                                                />
                                                {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name.message}</p>}
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-secondary ml-1">Email Address</label>
                                                <input
                                                    {...register("email")}
                                                    placeholder="john@example.com"
                                                    className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border transition-all focus:ring-4 focus:ring-primary/10 outline-none ${errors.email ? "border-red-500" : "border-slate-100 focus:border-primary"
                                                        }`}
                                                />
                                                {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email.message}</p>}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-secondary ml-1">Phone Number</label>
                                                <input
                                                    {...register("phone")}
                                                    placeholder="+27 XX XXX XXXX"
                                                    className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border transition-all focus:ring-4 focus:ring-primary/10 outline-none ${errors.phone ? "border-red-500" : "border-slate-100 focus:border-primary"
                                                        }`}
                                                />
                                                {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone.message}</p>}
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-secondary ml-1">Service Required</label>
                                                <select
                                                    {...register("service")}
                                                    className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border transition-all focus:ring-4 focus:ring-primary/10 outline-none appearance-none ${errors.service ? "border-red-500" : "border-slate-100 focus:border-primary"
                                                        }`}
                                                >
                                                    <option value="">Select a service</option>
                                                    <option value="maintenance">Preventative Maintenance</option>
                                                    <option value="repair">Emergency Repair</option>
                                                    <option value="installation">Equipment Installation</option>
                                                    <option value="parts">Spare Parts Supply</option>
                                                    <option value="other">Other Enquiry</option>
                                                </select>
                                                {errors.service && <p className="text-red-500 text-xs mt-1 ml-1">{errors.service.message}</p>}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-secondary ml-1">Your Message</label>
                                            <textarea
                                                {...register("message")}
                                                rows={5}
                                                placeholder="Tell us about your requirements..."
                                                className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border transition-all focus:ring-4 focus:ring-primary/10 outline-none resize-none ${errors.message ? "border-red-500" : "border-slate-100 focus:border-primary"
                                                    }`}
                                            ></textarea>
                                            {errors.message && <p className="text-red-500 text-xs mt-1 ml-1">{errors.message.message}</p>}
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
                                            <div className="bg-red-50 p-4 rounded-xl flex items-center gap-3 text-red-600">
                                                <AlertCircle size={20} />
                                                <p className="text-sm font-medium">Oops! Something went wrong. Please try again.</p>
                                            </div>
                                        )}
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Embed Placeholder */}
            <section className="py-20 bg-slate-100">
                <div className="container mx-auto px-4 h-[400px] bg-gray-200 rounded-[3rem] flex items-center justify-center text-gray-500 font-bold border-8 border-white shadow-2xl">
                    <div className="text-center">
                        <MapPin size={48} className="mx-auto mb-4 opacity-20" />
                        <p className="uppercase tracking-widest text-sm">Interactive Google Map Embed</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
