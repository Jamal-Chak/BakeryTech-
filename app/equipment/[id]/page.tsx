import PageClient from "./PageClient";
import { equipment } from "@/lib/data";
import { constructMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
export function generateStaticParams() { return equipment.map(item => ({ id: item.id })); }
export async function generateMetadata({params}: {params: Promise<{id: string}>}) {
 const { id } = await params;
 const item = equipment.find(item => item.id === id);
 if (!item) notFound();
 return constructMetadata({ title: item.name, description: item.description, image: item.image, path: `/equipment/${id}` });
}
export default function Page({params}: {params: Promise<{id: string}>}) { return <PageClient params={params} />; }
