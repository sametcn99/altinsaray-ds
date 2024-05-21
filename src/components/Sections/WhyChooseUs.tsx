import React from "react";
import InformationSection from "../Cards/InformationSection";
import Image from "next/image";
import DescriptionCard from "../Cards/DescriptionCard";
import { features } from "@/lib/features";

export default function WhyChooseUs() {
  return (
    <InformationSection id="bizi-neden-tercih-etmelisiniz">
      <Image
        src={"/wedding.png"}
        alt="Letter Icon"
        width={350}
        height={350}
        className=""
      />
      <DescriptionCard title="Bizi Neden Tercih Etmelisiniz">
        <ul className="flex flex-col gap-1">
          {features.map((feature, index) => (
            <li className="flex flex-row gap-4" key={index}>
              <div>{feature.icon}</div>
              <h3> {feature.name}</h3>
            </li>
          ))}
        </ul>
      </DescriptionCard>
    </InformationSection>
  );
}
