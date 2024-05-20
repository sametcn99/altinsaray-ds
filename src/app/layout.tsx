import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import ScrollTop from "@/components/ui/ScrollTop";
import NavbarWrapper from "@/components/Sections/Navbar/NavbarWrapper";
import Notification from "@/components/Buttons/Notification";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Altın Saray Düğün Salonları",
  description: "Altın Saray Düğün Salonları",
  creator: "Altın Saray Düğün Salonları",
  keywords: [
    "Altın Saray Düğün Salonları",
    "Düğün Salonları",
    "Düğün",
    "Salon",
    "Altın Saray",
  ],
  category: "Wedding",
  robots: "index, follow",
  metadataBase: new URL("https://www.altinsaraydugunsalonlari.com/"),
  twitter: {
    card: "summary",
    creator: "@altinsaraydugunsalonlari",
    title: "Altın Saray Düğün Salonları",
    creatorId: "altinsaraydugunsalonlari",
    description: "Altın Saray Düğün Salonları",
    site: "https://www.altinsaraydugunsalonlari.com",
  },
  openGraph: {
    title: "Altın Saray Düğün Salonları",
    description: "Altın Saray Düğün Salonları",
    url: "https://www.altinsaraydugunsalonlari.com",
    type: "website",
    siteName: "Altın Saray Düğün Salonları",
    images: [
      {
        url: "/favicon.png",
        width: 1000,
        height: 1000,
        alt: "Altın Saray Düğün Salonları",
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
        <section className="mx-auto max-w-screen-2xl scroll-smooth px-3 text-text-400 antialiased selection:bg-text-200 selection:text-text-700">
          <NavbarWrapper />
          {children}
          <Footer />
          <ScrollTop />
        </section>
      </body>
    </html>
  );
}
