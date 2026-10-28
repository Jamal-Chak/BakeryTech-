# BESS Commercial Equipment - implementation and QA

Updated: 28 October 2026

## Business configuration

- Public brand: BESS Commercial Equipment
- Legal entity: BESS (Pty) Ltd
- Canonical domain: https://www.bessequipment.co.za
- Phone and WhatsApp: +27 76 805 2041
- Public email: Edwardndimbaeddie6@gmail.com
- LinkedIn: https://www.linkedin.com/company/bess-commercial-equipment/
- Facebook: https://www.facebook.com/profile.php?id=61595968351306

## Implemented

- Industrial navy/orange visual system, BESS wordmark, favicon and branded social preview.
- Equal homepage pillars and dedicated `/bakery`, `/butchery` and `/catering` pages.
- All requested equipment categories, a catalogue hub, bakery product detail pages, and division-aware catalogue enquiries.
- Maintenance, emergency repair callouts, installation and spare parts content across all divisions.
- Header navigation: Home, Bakery, Butchery, Catering, Maintenance & Repair, Contact.
- Exact supplied LinkedIn, Facebook and WhatsApp URLs in header and footer; external links use a new tab with `noopener noreferrer`.
- Exact 2026 copyright and BESS (Pty) Ltd trading-brand disclosure.
- Owner-confirmed email and phone configuration shared across contact surfaces.
- Page-specific SEO and a 23-URL sitemap using the BESS domain.
- Existing hardened Resend contact API, shared Redis throttling, strict validation and accessible gallery retained.
- Original code-based equipment illustrations represent the three divisions. Product availability, models and specifications are confirmed by quotation; diagrams are illustrative.

## Verification

- Production build and TypeScript: pass.
- Lint: pass without warnings.
- API regression tests: 8 pass, including catalogue enquiries across all three divisions. Resend and Redis are mocked; no real email is sent.
- Browser QA on production build: metadata, 23 sitemap entries, missing-item 404s, exact social URLs and new-tab attributes, exact legal disclosure, image decoding, product and division context, mocked form submissions, gallery keyboard/focus controls, and mobile navigation/overflow.
- Automated WCAG A/AA scans cover 11 representative pages: home, all three divisions, services, equipment hub, gallery, about, contact, one product and one service detail.
- Desktop and mobile screenshots are generated under ignored `test-results/`.

## Deployment notes

The site is implemented and locally verified; it has not been deployed to the public domain. Resend credentials, a verified sending address, Redis credentials, a rate-limit salt and the trusted proxy IP-header configuration are still required for live email-form delivery. WhatsApp and direct email links use the supplied contact details independently of that configuration.

The owner-confirmed address is 57 Railway, Benoni, South Africa. Contact details and the map use this address. Confirm service coverage before launch. Run a real inbox-delivery check after configuring production services. Automated accessibility checks do not replace manual screen-reader testing. No Lighthouse measurement or cross-browser certification is claimed.

See `.env.example` and `README.md` for configuration and test commands.
