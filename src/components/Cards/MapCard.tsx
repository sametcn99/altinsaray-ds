"use client";
import { useState } from "react";
import InformationSection from "./InformationSection";
import DescriptionCard from "./DescriptionCard";
import Link from "next/link";
import Image from "next/image";
import { isMobile } from "react-device-detect";

export default function MapCard() {
  const [iframeLoaded, setIframeLoaded] = useState(true);

  const handleIframeError = () => {
    setIframeLoaded(false);
  };

  return (
    <InformationSection id="ulasim">
      {isMobile ? (
        <Link
          className="flex h-[20rem] w-full flex-col items-center justify-center gap-2 rounded-2xl shadow-2xl sm:h-[20rem] sm:w-[20rem] md:h-[30rem] md:w-[30rem]"
          href="https://www.google.com/maps/place/Altinsaray%20Dugun%20Salonu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/hata.png"
            alt="Google Map"
            objectFit="cover"
            className="rounded-2xl"
            width={100}
            height={100}
          />
          <p className="text-center font-bold">
            Canlı Harita Yüklenemedi. <br />
            Haritayı açmak için tıklayın.
          </p>
        </Link>
      ) : (
        <>
          {iframeLoaded ? (
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191.328947515801!2d32.84100599185166!3d39.890739990973216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f62f5fb7065%3A0xe1e5aa61fcd7c7fb!2sAltinsaray%20Dugun%20Salonu!5e0!3m2!1sen!2str!4v1716083418282!5m2!1sen!2str"
              className="h-[20rem] w-full rounded-2xl shadow-2xl sm:h-[20rem] sm:w-[20rem] md:h-[30rem] md:w-[30rem]"
              referrerPolicy="no-referrer-when-downgrade"
              id="google-map"
              onError={handleIframeError}
            ></iframe>
          ) : (
            <Link
              className="flex h-[20rem] w-full flex-col items-center justify-center gap-2 rounded-2xl shadow-2xl sm:h-[20rem] sm:w-[20rem] md:h-[30rem] md:w-[30rem]"
              href="https://www.google.com/maps/place/Altinsaray%20Dugun%20Salonu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/hata.png"
                alt="Google Map"
                objectFit="cover"
                className="rounded-2xl"
                width={300}
                height={300}
              />
              <p className="text-center font-bold">
                Canlı Harita Yüklenemedi. <br />
                Haritayı açmak için tıklayın.
              </p>
            </Link>
          )}
        </>
      )}

      <DescriptionCard title="Ulaşım">
        <p>
          Piri Caddesi, No: 30, Burç Mahallesi, Ankara&apos;daki düğün
          salonumuza ulaşmak için Kızılay&apos;dan Batıkent yönüne giden metroya
          binip Atatürk Kültür Merkezi&apos;nde inin ve 210 numaralı otobüse
          geçerek Piri Caddesi durağında inebilirsiniz. Özel araçla
          geliyorsanız, Eskişehir Yolu üzerinden Burç Mahallesi tabelalarını
          takip edin. Salonumuzun önünde geniş bir otopark bulunmaktadır
        </p>
      </DescriptionCard>
    </InformationSection>
  );
}
