import type { Metadata } from "next";
import { site } from "./site";
export function constructMetadata({ title = "Bakery & Butchery Equipment", description = "Commercial bakery and butchery equipment supply, installation and technical servicing in South Africa.", image = "/opengraph-image", path = "/", noIndex = false }: {title?: string; description?: string; image?: string; path?: string; noIndex?: boolean} = {}): Metadata {
 const fullTitle = `${title} | ${site.name}`;
 return {
  metadataBase: new URL(site.url), title: fullTitle, description,
  alternates: {canonical: path},
  openGraph: {type: "website", locale: "en_ZA", siteName: site.name, title: fullTitle, description, url: path, images: [{url: image, alt: site.name}]},
  twitter: {card: "summary_large_image", title: fullTitle, description, images: [image]},
  robots: {index: !noIndex, follow: !noIndex},
 };
}
