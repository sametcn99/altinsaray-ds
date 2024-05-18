import AboutUs from "@/components/AboutUs";
import MapCard from "@/components/Cards/MapCard";
import { Pricing } from "@/components/Cards/Pricing";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <MapCard />
      <Pricing />
      <AboutUs />
    </>
  );
}
