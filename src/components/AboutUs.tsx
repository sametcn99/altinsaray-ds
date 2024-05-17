import React from "react";
import LetterCard from "./Cards/LetterCard";
import InformationCard from "./Cards/InformationCard";

export default function AboutUs() {
  return (
    <section
      className="flex min-h-screen w-full flex-row items-center justify-center gap-6"
      id="hakkimizda"
    >
      <LetterCard />
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
