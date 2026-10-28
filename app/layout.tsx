import { constructMetadata } from "@/lib/seo";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"antialiased min-h-screen flex flex-col"}
      >
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
