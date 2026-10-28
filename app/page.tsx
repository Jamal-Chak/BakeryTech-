import PageClient from "./PageClient";
import { constructMetadata } from "@/lib/seo";
export const metadata = constructMetadata({ title: "Bakery, Butchery & Catering Equipment", description: "Commercial bakery, butchery and catering equipment. BESS supplies, installs and services food service machinery in South Africa.", path: "/" });
export default function Page() { return <PageClient />; }
