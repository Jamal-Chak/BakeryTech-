"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import { CTA } from "@/components/CardsAndCTA";
import { ArrowLeft, ShieldCheck, FileText, Lock, Mail, Phone, MapPin } from "lucide-react";

export default function PrivacyPageClient() {
  return (
    <>
      <section className="page-banner py-14 md:py-20">
        <div className="container mx-auto px-5">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary font-bold mb-6 hover:translate-x-1 transition-transform text-sm"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <p className="eyebrow text-primary mb-3">Legal & Compliance</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-secondary max-w-3xl">
            Privacy Policy & Terms of Service
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed mt-4 max-w-2xl">
            How BESS (Pty) Ltd protects your information in compliance with South Africa&apos;s Protection of Personal Information Act (POPIA), alongside our commercial quotation and equipment terms.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container mx-auto px-5 max-w-4xl space-y-12 text-slate-300">
          <div>
            <div className="flex items-center gap-3 mb-4 text-secondary">
              <ShieldCheck className="text-primary" size={24} />
              <h2 className="text-2xl font-bold text-white">1. Protection of Personal Information (POPIA)</h2>
            </div>
            <p className="leading-relaxed">
              BESS Commercial Equipment is a trading brand of <strong>BESS (Pty) Ltd</strong>, registered in the Republic of South Africa. We respect your constitutional right to privacy and are committed to processing your personal data lawfully, transparently, and securely in accordance with the Protection of Personal Information Act, No. 4 of 2013 (POPIA).
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4 text-secondary">
              <Lock className="text-primary" size={24} />
              <h2 className="text-2xl font-bold text-white">2. Information We Collect</h2>
            </div>
            <p className="leading-relaxed mb-4">
              When you enquire about equipment, request a quotation, schedule technical servicing, or contact our Benoni workshop, we may collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>Full name and business / trading entity name.</li>
              <li>Contact details including business email address and direct phone or WhatsApp number.</li>
              <li>Physical or delivery address for installation, equipment transport, or on-site maintenance.</li>
              <li>Equipment specifications, workshop service history, and technical enquiry notes.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4 text-secondary">
              <FileText className="text-primary" size={24} />
              <h2 className="text-2xl font-bold text-white">3. How Your Information Is Used</h2>
            </div>
            <p className="leading-relaxed mb-4">
              Your personal information is processed strictly for legitimate business purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>Generating accurate equipment quotations and formal commercial invoices.</li>
              <li>Coordinating equipment logistics, workshop diagnostics, preventative servicing, and emergency callouts.</li>
              <li>Communicating order status, parts availability, and warranty documentation.</li>
              <li>Fulfilling legal, tax (SARS), and regulatory accounting duties in South Africa.</li>
            </ul>
            <p className="leading-relaxed mt-4">
              We never sell, rent, or trade your personal information to third parties. Technical infrastructure providers (such as Resend for transactional email dispatch and Upstash Redis for anti-abuse rate limiting) operate under strict contractual data protection agreements.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4 text-secondary">
              <ShieldCheck className="text-primary" size={24} />
              <h2 className="text-2xl font-bold text-white">4. Commercial Quotation & Equipment Terms</h2>
            </div>
            <div className="space-y-4">
              <p className="leading-relaxed">
                <strong>Illustrative Media:</strong> Catalogue imagery, dimensions, and schematics published on this website are illustrative and representative of commercial bakery, butchery, and food service machinery. Exact technical specifications, electrical ratings, capacity, and manufacturer lead times are confirmed on your written formal quotation.
              </p>
              <p className="leading-relaxed">
                <strong>Quotations:</strong> Official quotations issued by BESS (Pty) Ltd are valid for the period specified on the quotation document (typically 14 to 30 days), subject to foreign exchange rate movements and stock availability at the time of order confirmation.
              </p>
              <p className="leading-relaxed">
                <strong>Installation & Servicing:</strong> Machine installation and commissioning require site readiness (adequate electrical supply, water connections, drainage, and level flooring). Technical callouts outside the standard Gauteng servicing radius are subject to travel and logistical scheduling confirmed in advance.
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4 text-secondary">
              <Mail className="text-primary" size={24} />
              <h2 className="text-2xl font-bold text-white">5. Information Officer & Contact Inquiries</h2>
            </div>
            <p className="leading-relaxed mb-4">
              Under POPIA, you have the right to request access to, correction of, or deletion of your personal data held by BESS (Pty) Ltd. For any privacy queries or legal requests, please contact our Information Officer:
            </p>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-3">
              <p className="font-bold text-white">BESS (Pty) Ltd — Information Officer</p>
              <p className="flex items-center gap-3 text-sm text-slate-300">
                <Mail size={16} className="text-primary shrink-0" />
                <a href={`mailto:${site.email}`} className="hover:underline">{site.email}</a>
              </p>
              <p className="flex items-center gap-3 text-sm text-slate-300">
                <Phone size={16} className="text-primary shrink-0" />
                <a href={`tel:${site.phone}`} className="hover:underline">{site.phoneDisplay}</a>
              </p>
              <p className="flex items-start gap-3 text-sm text-slate-300">
                <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                {site.location}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
