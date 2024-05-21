"use client";
import { salonImages } from "@/lib/images";
import Image from "next/image";
import InformationSection from "../Cards/InformationSection";
import DescriptionCard from "../Cards/DescriptionCard";
import { texts } from "@/lib/texts";
import { useState, useEffect } from "react";
import Loader from "../Icons/Loader";
import { cn } from "@/lib/utils";

export default function Gallery() {
  const [loadedCount, setLoadedCount] = useState(0);
  const totalImages = salonImages.length;

  useEffect(() => {
    if (loadedCount === totalImages) {
      setIsLoading(false);
    }
  }, [loadedCount, totalImages]);

  const handleImageLoad = () => {
    setLoadedCount((prevCount) => prevCount + 1);
  };

  const [isLoading, setIsLoading] = useState(true);

  return (
    <InformationSection id="galeri">
      <div className="relative flex max-w-[40rem] flex-row flex-wrap items-center justify-center gap-2">
        {salonImages.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            onLoad={handleImageLoad}
            className={cn(
              isLoading ? `opacity-30` : `opacity-100`,
              "rounded-xl shadow-md",
            )}
          />
        ))}
        {isLoading && (
          <Loader className={cn(`absolute left-1/2  top-1/2 z-0`)} />
        )}
      </div>
      <DescriptionCard title={texts.galeri.title}>
        <p>{texts.galeri.description}</p>
      </DescriptionCard>
    </InformationSection>
  );
}
