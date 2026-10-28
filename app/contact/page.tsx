import PageClient from "./PageClient";
import { constructMetadata } from "@/lib/seo";
import { divisions } from "@/lib/divisions";
export const metadata = constructMetadata({title: "Contact BESS", description: "Get a quote, request an equipment catalog or arrange maintenance for bakery, butchery and catering equipment.", path: "/contact"});
export default async function Page({searchParams}: {searchParams: Promise<{product?: string | string[]; division?: string | string[]; request?: string | string[]}>}) {
 const query = await searchParams;
 const division = divisions.find(item => item.slug === query.division)?.slug;
 return <PageClient key={`${query.product || ""}-${division || ""}-${query.request || ""}`} productId={typeof query.product === "string" ? query.product : undefined} division={division} catalog={query.request === "catalog"}/>;
}
