import AboutUs from "@/components/AboutUs";
import MapCard from "@/components/Cards/MapCard";
import { Pricing } from "@/components/Cards/Pricing";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <MapCard />
      <Pricing />
      <AboutUs />
    </>
  );
}
