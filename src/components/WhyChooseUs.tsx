import React from "react";
import InformationSection from "./Cards/InformationSection";
import Image from "next/image";
import DescriptionCard from "./Cards/DescriptionCard";
import { CheckIcon } from "./CheckIcon";

export default function WhyChooseUs() {
  return (
    <InformationSection id="bizi-neden-tercih-etmelisiniz">
      <Image
        src={"/images/wedding.png"}
        alt="Letter Icon"
        width={400}
        height={400}
        className=""
      />
      <DescriptionCard title="Bizi Neden Tercih Etmelisiniz">
        <ul className="flex flex-col">
          <li className="flex flex-row gap-2">
            <CheckIcon />
            Modern dekorasyon
          </li>
          <li className="flex flex-row gap-2">
            <CheckIcon />
            Geniş kapasite
          </li>
          <li className="flex flex-row gap-2">
            <CheckIcon />
            Özel etkinlikler
          </li>
          <li className="flex flex-row gap-2">
            <CheckIcon />
            Profesyonel ekip
          </li>
          <li className="flex flex-row gap-2">
            <CheckIcon />
            Kusursuz hizmet
          </li>
          <li className="flex flex-row gap-2">
            <CheckIcon />
            Mutlu gün
          </li>
          <li className="flex flex-row gap-2">
            <CheckIcon />
            Misafir rahatlığı
          </li>
          <li className="flex flex-row gap-2">
            <CheckIcon />
            Geniş otopark
          </li>
          <li className="flex flex-row gap-2">
            <CheckIcon />
            Merkezi konum
          </li>
          <li className="flex flex-row gap-2">
            <CheckIcon />
            Çiftlerimize söz
          </li>
          <li className="flex flex-row gap-2">
            <CheckIcon />
            Hayalinizdeki düğün
          </li>
        </ul>
      </DescriptionCard>
    </InformationSection>
  );
}
