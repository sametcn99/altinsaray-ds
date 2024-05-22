import AboutUs from "@/components/Sections/AboutUs";
import MapCard from "@/components/Sections/MapCard";
import WhyChooseUs from "@/components/Sections/WhyChooseUs";
import Contact from "@/components/Sections/Contact";
import Gallery from "@/components/Sections/Gallery";
import Hero from "@/components/Sections/Hero";

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
