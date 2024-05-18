import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollTop from "@/components/ui/ScrollTop";

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
        className={`${montserrat.className} selection:text-text bg-image max-w-screen-3xl mx-auto scroll-smooth bg-contain px-3 text-text-50 antialiased selection:bg-text-700 `}
      >
        <Navbar />
        {children}
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
