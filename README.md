# BESS Commercial Equipment

Next.js App Router website for bakery, butchery and catering equipment supply, installation and servicing.

## Local development

Use Node.js 22 LTS or newer and npm. Run `npm install`, copy `.env.example` to `.env.local`, then run `npm run dev`.

## Deployment configuration

- Set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS origin (no trailing slash).
- Public address: 57 Railway, Benoni, South Africa. `NEXT_PUBLIC_BUSINESS_ADDRESS` controls the contact details and map.
- Phone and WhatsApp are owner-confirmed: +27768052041. Public email: Edwardndimbaeddie6@gmail.com. Canonical domain: https://www.bessequipment.co.za. LinkedIn and Facebook URLs are configured in `lib/site.ts`.
- Set `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` (a Resend-verified sender), and `CONTACT_TO_EMAIL` (administrator recipient). Enquiries are sent as plain text, with the visitor email as Reply-To. No visitor confirmation email is sent.
- Set `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`, and a random `RATE_LIMIT_SALT`. The shared Redis limiter permits five requests per ten minutes per hashed IP.
- Set `CONTACT_IP_HEADER` to a header overwritten by your trusted hosting proxy. On Vercel, use `x-vercel-forwarded-for`; confirm its documented behavior for your hosting setup. Never expose the origin server directly behind a proxy that passes user-controlled values for this header.
- Missing mail or limiter configuration returns HTTP 503; the UI never claims a message was sent when delivery was not accepted by the provider.
- Set public environment variables before building. Keep secrets server-side and outside Git.

## Content

Public brand: **BESS Commercial Equipment**. Legal entity: **BESS (Pty) Ltd**. Core division routes: `/bakery`, `/butchery`, `/catering`; catalogue hub: `/equipment`; maintenance: `/services`. `lib/divisions.ts` defines each equipment range. Catalogue requests prefill the contact form with the selected division.

`lib/site.ts` contains contact configuration and owner-verified claims. Statistics, testimonials and company history are hidden until verified content is added. Warranty and availability are quotation-dependent. The supplied LinkedIn, Facebook and WhatsApp links appear in both header and footer. Review equipment specifications, imagery rights and service descriptions before publication.

## Verification

Run `npm run lint`, `npm run typecheck`, `npm test` and `npm run build`. API regression tests mock both Redis and Resend. For browser QA, start the production server on port 3100 (`npm start -- --port 3100`) and run `npm run test:browser`. Browser QA uses installed Google Chrome; set `QA_BASE_URL` to test another local port. Screenshots are saved under ignored `test-results/`. Run `npm start` after a successful build. Check all nine main pages, service/equipment detail routes, unknown IDs (404), sitemap and robots.

For launch, use a real inbox and verified sender to submit one enquiry, confirm administrator receipt and Reply-To, test rate-limit 429 responses and provider failure behavior, then test mobile navigation and gallery keyboard controls (Tab, Escape, Left/Right). Automated tests must mock providers and must never send real email.

Only a provider acceptance is confirmed by the API; inbox delivery depends on domain authentication, provider status and recipient filtering. No personal enquiry data is logged or stored by the application.
