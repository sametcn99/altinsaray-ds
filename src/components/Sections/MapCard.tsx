"use client";
import { useState } from "react";
import InformationSection from "../Cards/InformationSection";
import DescriptionCard from "../Cards/DescriptionCard";
import Link from "next/link";
import Image from "next/image";
import { texts } from "@/lib/texts";

export default function MapCard() {
  const [iframeLoaded, setIframeLoaded] = useState(true);

  const handleIframeError = () => {
    setIframeLoaded(false);
  };

  return (
    <InformationSection id="ulasim">
      {iframeLoaded ? (
        <div className="text-center">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191.328947515801!2d32.84100599185166!3d39.890739990973216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f62f5fb7065%3A0xe1e5aa61fcd7c7fb!2sAltinsaray%20Dugun%20Salonu!5e0!3m2!1sen!2str!4v1716083418282!5m2!1sen!2str"
            className="h-[20rem] w-full rounded-2xl shadow-2xl sm:h-[20rem] sm:w-[20rem] md:h-[30rem] md:w-[30rem]"
            referrerPolicy="no-referrer-when-downgrade"
            id="google-map"
            onError={handleIframeError}
            sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation"
          ></iframe>
          <Link
            href="yonlendir/harita"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-light hover:underline"
          >
            Harita Yüklenmediyse Tıklayın
          </Link>
        </div>
      ) : (
        <Link
          className="flex h-[20rem] w-full flex-col items-center justify-center gap-2 rounded-2xl shadow-2xl sm:h-[20rem] sm:w-[20rem] md:h-[30rem] md:w-[30rem]"
          href="yonlendir/harita"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/hata.png"
            alt="Google Map"
            objectFit="cover"
            className="rounded-2xl"
            width={150}
            height={150}
          />
          <p className="text-center font-bold">
            Canlı Harita Yüklenemedi. <br />
            Haritayı açmak için tıklayın.
          </p>
        </Link>
      )}

      <DescriptionCard title={texts.ulasim.title}>
        <p>{texts.ulasim.description}</p>
      </DescriptionCard>
    </InformationSection>
  );
}
