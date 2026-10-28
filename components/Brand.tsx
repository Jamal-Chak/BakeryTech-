import Link from "next/link";
export default function Brand({ dark = false }: { dark?: boolean }) {
 return <Link href="/" aria-label="BESS Commercial Equipment home" className={`inline-flex items-center gap-3 shrink-0 ${dark ? "text-white" : "text-secondary"}`}>
  <span aria-hidden="true" className="flex h-11 w-2 gap-0.5"><span className="w-1 bg-primary"/><span className={dark ? "w-1 bg-white/40" : "w-1 bg-secondary/30"}/></span>
  <span><span className="block text-[32px] leading-none font-black tracking-[-0.06em]">BESS<span className="text-primary">.</span></span><span className={`block mt-1 text-[9px] tracking-[0.17em] font-bold ${dark ? "text-slate-300" : "text-slate-600"}`}>COMMERCIAL EQUIPMENT</span></span>
 </Link>;
}
