import PageClient from "./PageClient";
import { constructMetadata } from "@/lib/seo";
export const metadata = constructMetadata({ title: "About BESS", description: "Learn about BESS Commercial Equipment and our approach to commercial equipment supply and technical support.", path: "/about" });
export default function Page() { return <PageClient />; }
