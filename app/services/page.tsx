import PageClient from "./PageClient";
import { constructMetadata } from "@/lib/seo";
export const metadata = constructMetadata({ title: "Maintenance & Repair", description: "Commercial bakery and butchery equipment maintenance, emergency repairs, spare parts and installation from BESS.", path: "/services" });
export default function Page() { return <PageClient />; }
