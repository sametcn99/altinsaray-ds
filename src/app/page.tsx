import AboutUs from "@/components/AboutUs";
import MapCard from "@/components/Cards/MapCard";
import Hero from "@/components/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <MapCard />
      <AboutUs />
    </>
  );
}
