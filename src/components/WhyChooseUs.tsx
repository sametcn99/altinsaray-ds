import React from "react";
import InformationSection from "./Cards/InformationSection";
import Image from "next/image";
import DescriptionCard from "./Cards/DescriptionCard";

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
      <DescriptionCard
        title="Bizi Neden Tercih Etmelisiniz"
        description="Modern dekorasyonu ve geniş kapasitesiyle, her türlü özel etkinliğe ev
        sahipliği yapmaktayız. Profesyonel ekibimiz, en mutlu gününüzde size
        kusursuz bir hizmet sunmak için buradadır. Misafirlerinizin rahatlığı
        için geniş otopark ve merkezi bir konum avantajı sunuyoruz. Bizi tercih
        eden çiftlerimize hayallerindeki düğünü gerçeğe dönüştürme sözü
        veriyoruz."
      />
    </InformationSection>
  );
}
