import AboutUs from "@/components/Sections/AboutUs";
import MapCard from "@/components/Sections/MapCard";
import GridFeatures from "@/components/Sections/GridFeatures";
import Hero from "@/components/Hero/Hero";
import WhyChooseUs from "@/components/Sections/WhyChooseUs";
import Contact from "@/components/Sections/Contact";
import Gallery from "@/components/Sections/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Gallery />
      <MapCard />
      <Contact />
      <AboutUs />
    </>
  );
}
