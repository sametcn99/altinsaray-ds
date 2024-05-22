import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ScrollTop from "@/components/ui/ScrollTop";
import NavbarWrapper from "@/components/Sections/Navbar/NavbarWrapper";
import { cn } from "@/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Sections/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Altın Saray Wedding Hall",
    default: "Altın Saray Wedding Hall",
  },
  description: "Altın Saray Wedding Hall",
  creator: "Altın Saray Wedding Hall",
  keywords: [
    "Altın Saray Düğün Salonları",
    "Altın Saray Wedding Hall",
    "Düğün Salonları",
    "Düğün",
    "Salon",
    "Altın Saray",
    "Düğün Salonu",
    "Wedding Hall",
  ],
  category: "Wedding",
  robots: "index, follow",
  metadataBase: new URL("https://altinsarayweddinghall.com/"),
  twitter: {
    card: "summary",
    creator: "@altinsarayweddinghall",
    title: "Altın Saray Wedding Hall",
    creatorId: "altinsarayweddinghall",
    description: "Altın Saray Wedding Hall",
    site: "https://altinsarayweddinghall.com",
  },
  openGraph: {
    title: {
      template: "%s | Altın Saray Wedding Hall",
      default: "Altın Saray Wedding Hall",
    },
    description: "Altın Saray Wedding Hall",
    url: "https://altinsaraydugunsalonlari.com",
    type: "website",
    siteName: "Altın Saray Wedding Hall",
    images: [
      {
        url: "/favicon.png",
        width: 500,
        height: 500,
        alt: "Altın Saray Wedding Hall",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={cn(`${montserrat.className} pattern  w-full`)}>
        <section className="mx-auto max-w-screen-2xl scroll-smooth px-3 text-text-400 antialiased selection:bg-text-400 selection:text-text-900">
          <NavbarWrapper />
          {children}
          <Footer />
          <ScrollTop />
        </section>
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-XR3W7833MT" />
    </html>
  );
}
