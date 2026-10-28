import { ImageResponse } from "next/og";
export const alt = "BESS Commercial Equipment \u2014 Bakery, Butchery & Catering";
export const size = {width: 1200, height: 630};
export const contentType = "image/png";
export default function Image() {
 return new ImageResponse(<div style={{width:"100%",height:"100%",background:"#142536",color:"white",display:"flex",flexDirection:"column",padding:"70px",justifyContent:"space-between",fontFamily:"sans-serif"}}><div style={{display:"flex",fontSize:90,fontWeight:900,letterSpacing:-5}}>BESS<span style={{color:"#f6b17a"}}>.</span></div><div style={{display:"flex",fontSize:57,fontWeight:700,lineHeight:1.15,maxWidth:1000}}>Commercial Bakery, Butchery & Catering Equipment</div><div style={{display:"flex",fontSize:26,color:"#f6b17a"}}>Supply. Install. Service. | www.bessequipment.co.za</div></div>,size);
}
