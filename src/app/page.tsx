import AboutUs from "@/components/AboutUs";
import MapCard from "@/components/Cards/MapCard";
import { Pricing } from "@/components/Cards/Pricing";
import GridFeatures from "@/components/GridFeatures";
import Hero from "@/components/Hero/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";

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
