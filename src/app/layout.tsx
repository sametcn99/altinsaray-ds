import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollTop from "@/components/ui/ScrollTop";
import NavbarWrapper from "@/components/Navbar/NavbarWrapper";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Altın Saray Düğün Salonları",
  description: "Altın Saray Düğün Salonları",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${montserrat.className} pattern relative mx-auto max-w-screen-2xl scroll-smooth px-3 text-text-200 antialiased selection:bg-text-200 selection:text-text-700 `}
      >
        <NavbarWrapper />
        {children}
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
