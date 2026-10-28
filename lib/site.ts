// Publish only owner-verified business details and claims.
export const site = {
 name: "BESS Commercial Equipment",
 legalName: "BESS (Pty) Ltd",
 phoneDisplay: "+27 76 805 2041",
 linkedin: "https://www.linkedin.com/company/bess-commercial-equipment/",
 facebook: "https://www.facebook.com/profile.php?id=61595968351306",
 url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.bessequipment.co.za",
 email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "Edwardndimbaeddie6@gmail.com",
 phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || "+27768052041",
 whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "+27768052041",
 location: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || "57 Railway, Benoni, South Africa",
};
export const phoneHref = site.phone ? `tel:${site.phone.replace(/[^+\d]/g, "")}` : "/contact";
export const whatsappHref = site.whatsapp ? `https://wa.me/${site.whatsapp.replace(/\D/g, "")}` : "/contact";
export const claims = {
 dealerBrands: [] as string[],
 stats: [] as {label: string; value: string}[],
 testimonials: [] as {name: string; role: string; content: string}[],
 history: [] as {year: string; title: string; desc: string}[],
 qualityTitle: "Equipment Support",
 qualityDescription: "Discuss maintenance and installation requirements with our team.",
 availability: "Confirm availability with our team",
 warranty: "Warranty terms supplied with your quotation",
 benefits: ["Maintenance planning", "Equipment enquiries", "Technical support", "Spare parts enquiries"],
};
