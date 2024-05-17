import React from "react";
import { ImageCard } from "../Cards/ImageCard";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import IconButton from "../Buttons/IconButton";

export default function Hero() {
  return (
    <main className="flex min-h-screen flex-row flex-wrap items-center justify-center gap-4 selection:bg-text-300 selection:text-text-900">
      <div className="max-w-xl">
        <h1 className="bg-gradient-to-br from-text-500 via-text-600 to-text-700 bg-clip-text text-center text-6xl font-black text-transparent lg:text-left">
          Altın Saray Düğün Salonları
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
            <span className="text-lg">Whatsapp Üzerinden Ulaşın</span>
          </IconButton>
        </div>
      </div>
      <ImageCard />
    </main>
  );
}
