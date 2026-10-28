import DivisionPage from "@/components/DivisionPage";
import { constructMetadata } from "@/lib/seo";
export const metadata = constructMetadata({title: "Commercial Bakery Equipment", description: "Explore BESS bakery equipment, installation, maintenance and technical servicing for commercial food businesses in South Africa.", path: "/bakery"});
export default function Page() { return <DivisionPage slug="bakery"/>; }
