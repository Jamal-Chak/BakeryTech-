import type { DivisionSlug } from "@/lib/divisions";
// Original schematic illustrations; equipment configurations are illustrative.
export default function EquipmentIllustration({ division, className = "" }: {division: DivisionSlug; className?: string}) {
 return <svg viewBox="0 0 320 210" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
  <path d="M30 184H292M50 194H110M256 194H280" opacity=".2"/>
  {division === "bakery" ? <>
   <path d="M54 46h132v127H54z" fill="currentColor" fillOpacity=".04"/><path d="M54 66h132M62 173v11M178 173v11"/><rect x="65" y="80" width="110" height="34" rx="3"/><rect x="65" y="123" width="110" height="34" rx="3"/><path d="M76 101h73M76 144h73M164 87v18M164 130v18"/><circle cx="69" cy="56" r="3"/><circle cx="81" cy="56" r="3"/><path d="M98 56h28M164 53h10"/>
   <path d="M226 68v90l-16 15v11h78v-11l-16-15V87" fill="currentColor" fillOpacity=".06"/><path d="M220 68h55a12 12 0 0 1 12 12v18h-43V86h-24z" fill="currentColor" fillOpacity=".08"/><path d="M230 119h57c0 34-5 43-28 43s-29-9-29-43ZM253 98v27m0 0 12 7m-12-7-8 9"/><circle cx="277" cy="81" r="3"/>
  </> : division === "butchery" ? <>
   <path d="M79 36h60v35h-29v90H79z" fill="currentColor" fillOpacity=".06"/><path d="M139 48h28v104M109 71h57M54 127h139v13H54zM68 140v44M179 140v44M54 160h139M100 47h21"/><circle cx="92" cy="96" r="4"/><path d="M207 110h62v52h-62zM216 162v21M261 162v21" fill="currentColor" fillOpacity=".06"/><path d="M214 110V95h49v15M221 95l-11-24h63l-12 24M270 122h21v21h-21M291 126h9v13h-9"/><circle cx="224" cy="139" r="5"/><path d="M236 139h21"/>
  </> : <>
   <path d="M48 89h181v83H48z" fill="currentColor" fillOpacity=".04"/><path d="M48 111h181M48 89l20-36h144l17 36M62 172v12M216 172v12"/><ellipse cx="92" cy="72" rx="17" ry="6"/><ellipse cx="166" cy="72" rx="17" ry="6"/><ellipse cx="118" cy="55" rx="12" ry="4"/><ellipse cx="187" cy="55" rx="12" ry="4"/><rect x="64" y="123" width="147" height="35" rx="3"/><path d="M117 133h40"/>
   <circle cx="70" cy="100" r="3"/><circle cx="98" cy="100" r="3"/><circle cx="126" cy="100" r="3"/><circle cx="154" cy="100" r="3"/><circle cx="182" cy="100" r="3"/><path d="M246 69h45v103h-45zM246 110h45M282 82v15M282 124v25M253 172v12M284 172v12" fill="currentColor" fillOpacity=".06"/>
  </>}
 </svg>;
}
