import React from "react";
import LetterCard from "./Cards/LetterCard";
import InformationSection from "./Cards/InformationSection";
import Image from "next/image";
import DescriptionCard from "./Cards/DescriptionCard";

export default function AboutUs() {
  return (
    <InformationSection id="hakkimizda">
      <Image
        src={"/images/simple gold-colored-minimal-letter-card.png"}
        alt="Letter Icon"
        width={300}
        height={300}
        className=""
      />
      <DescriptionCard title="Hakkımızda">
        <p>
          2010 yılında kurulan Altın Saray Wedding Hall, büyüleyici atmosferi ve
          modern olanaklarıyla dikkat çekiyor. 500 kişiye kadar misafir
          ağırlayabilen bu mekan, özel LED ışıklandırma sistemi ve zarif
          dekorasyonuyla unutulmaz bir düğün deneyimi sunuyor. Profesyonel
          şeflerin hazırladığı gurme lezzetler ve kişiye özel hizmetleri ile
          Altın Saray Wedding Hall, Ankara&apos;da evlenecek çiftler için rüya
          gibi bir ortam sağlıyor.
        </p>
      </DescriptionCard>
    </InformationSection>
  );
}
