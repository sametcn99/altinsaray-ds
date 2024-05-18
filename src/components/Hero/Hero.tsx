import React from "react";
import { ImageCard } from "../Cards/ImageCard";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import IconButton from "../Buttons/IconButton";
import Image from "next/image";

export default function Hero() {
  return (
    <main
      className="relative flex min-h-screen flex-row flex-wrap items-center justify-center gap-4 selection:bg-text-300 selection:text-text-900"
      id="hosgeldiniz"
    >
      <div className="max-w-xl">
        <h1 className=" gradient text-nowrap bg-clip-text text-center text-3xl font-black text-transparent sm:text-5xl md:text-6xl lg:text-left">
          Altın Saray
          <br />
          Wedding Hall
        </h1>
        <p className="font-light">
          Özel günlerinizi unutulmaz kılmak için, zarafet ve şıklığın buluştuğu
          eşsiz bir atmosferde, hayalinizdeki düğünü gerçeğe dönüştürüyoruz.
        </p>
        <div className="flex flex-wrap gap-2">
          <IconButton>
            <FaPhoneAlt className="text-2xl text-green-500" />
            <span className="text-lg">+90 444 44 44</span>
          </IconButton>
          <IconButton>
            <FaWhatsapp className="text-2xl text-green-500" />
            <span className="text-lg">Whatsapp</span>
          </IconButton>
        </div>
      </div>
      <ImageCard />
    </main>
  );
}
