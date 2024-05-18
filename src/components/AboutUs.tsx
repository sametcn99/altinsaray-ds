import React from "react";
import LetterCard from "./Cards/LetterCard";
import InformationCard from "./Cards/InformationCard";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section
      className="flex min-h-screen w-full flex-row flex-wrap items-center justify-center gap-6"
      id="hakkimizda"
    >
      {/* <LetterCard /> */}
      <Image
        src={"/images/simple gold-colored-minimal-letter-card.png"}
        alt="Letter Icon"
        width={300}
        height={300}
        className=""
      />
      <InformationCard>
        <h2 className="text-4xl font-bold">Hakkımızda</h2>
        <p>
          Modern dekorasyonu ve geniş kapasitesiyle, her türlü özel etkinliğe ev
          sahipliği yapmaktayız. Profesyonel ekibimiz, en mutlu gününüzde size
          kusursuz bir hizmet sunmak için buradadır. Misafirlerinizin rahatlığı
          için geniş otopark ve merkezi bir konum avantajı sunuyoruz. Bizi
          tercih eden çiftlerimize hayallerindeki düğünü gerçeğe dönüştürme sözü
          veriyoruz.
        </p>
      </InformationCard>
    </section>
  );
}
