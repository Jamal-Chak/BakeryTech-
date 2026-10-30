import { constructMetadata } from "@/lib/seo";
import "./globals.css";
import "./industrial.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionDock from "@/components/MobileActionDock";

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"industrial-site antialiased min-h-screen flex flex-col bg-white text-slate-900"}
      >
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-grow">
          {children}
        </main>
        <Footer />
        <MobileActionDock />
      </body>
    </html>
  );
}

