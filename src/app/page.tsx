import AboutUs from "@/components/Sections/AboutUs";
import MapCard from "@/components/Sections/MapCard";
import { Pricing } from "@/components/Sections/Pricing";
import GridFeatures from "@/components/Sections/GridFeatures";
import Hero from "@/components/Hero/Hero";
import WhyChooseUs from "@/components/Sections/WhyChooseUs";
import Contact from "@/components/Sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <MapCard />
      <Pricing />
      <Contact />
      <AboutUs />
    </>
  );
}
