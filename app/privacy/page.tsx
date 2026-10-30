import PageClient from "./PageClient";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Privacy Policy & Terms",
  description: "Privacy policy, POPIA compliance, and commercial quotation terms for BESS Commercial Equipment.",
  path: "/privacy",
});

export default function Page() {
  return <PageClient />;
}
