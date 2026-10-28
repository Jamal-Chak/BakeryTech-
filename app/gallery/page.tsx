import PageClient from "./PageClient";
import { constructMetadata } from "@/lib/seo";
export const metadata = constructMetadata({ title: "Bakery Gallery", description: "Explore bakery equipment and production environment images.", path: "/gallery" });
export default function Page() { return <PageClient />; }
