import InformationSection from "../Cards/InformationSection";
import Image from "next/image";
import DescriptionCard from "../Cards/DescriptionCard";
import { texts } from "@/lib/texts";

export default function AboutUs() {
  return (
    <InformationSection id="hakkimizda">
      <Image
        src={"/images/simple gold-colored-minimal-letter-card.png"}
        alt="Letter Icon"
        width={300}
        height={300}
        className="pointer-events-none select-none"
      />
      <DescriptionCard title={texts.hakkimizda.title}>
        <p>{texts.hakkimizda.description}</p>
      </DescriptionCard>
    </InformationSection>
  );
}
