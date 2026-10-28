import PageClient from "./PageClient";
import { services } from "@/lib/data";
import { constructMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
export function generateStaticParams() { return services.map(item => ({ slug: item.slug })); }
export async function generateMetadata({params}: {params: Promise<{slug: string}>}) {
 const { slug } = await params;
 const item = services.find(item => item.slug === slug);
 if (!item) notFound();
 return constructMetadata({ title: item.title, description: item.description, path: `/services/${slug}` });
}
export default function Page({params}: {params: Promise<{slug: string}>}) { return <PageClient params={params} />; }
