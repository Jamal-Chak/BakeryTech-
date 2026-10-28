import PageClient from "./PageClient";
import { constructMetadata } from "@/lib/seo";
export const metadata = constructMetadata({ title: "Commercial Equipment Catalog", description: "Explore bakery, butchery and catering equipment, installation and servicing from BESS.", path: "/equipment" });
export default function Page() { return <PageClient />; }
