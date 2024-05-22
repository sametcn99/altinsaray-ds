import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import Link from "next/link";
import { texts } from "@/lib/texts";
import { ImageCard } from "../Cards/ImageCard";

export default function Hero() {
  return (
    <main
      className="relative flex flex-row flex-wrap-reverse items-center justify-center gap-4 py-8 selection:bg-text-300 selection:text-text-900"
      id="hosgeldiniz"
    >
      <div className="flex  flex-col flex-wrap gap-2 pt-4">
        <p className="max-w-[50rem] text-center text-4xl font-light md:text-start">
          {texts.catchword}
        </p>
        <h1 className="gradient bg-clip-text text-center text-5xl font-black text-transparent sm:text-8xl">
          Altın Saray
          <br />
          Wedding Hall
        </h1>
        <Link
          target="_blank"
          href={
            "https://www.google.com/maps?ll=39.890812,32.84109&z=20&t=m&hl=en&gl=TR&mapclient=embed&cid=16277603766031075323"
          }
          className="flex select-text flex-row items-center justify-center gap-1 text-center"
        >
          <ImLocation className="text-text-600" />
          <span>{texts.address}</span>
        </Link>
        <div className="flex select-none flex-col flex-wrap items-center justify-center gap-2">
          <Link
            href={`yonlendir/phone`}
            target="_blank"
            className="flex w-[15rem] flex-row gap-2 rounded-2xl border p-2 px-4 transition-all duration-1000 hover:font-bold"
          >
            <FaPhoneAlt className="text-2xl text-green-500" />
            <span className="text-lg">{texts.telephone}</span>
          </Link>
          <Link
            href={`yonlendir/whatsapp`}
            target="_blank"
            className="flex w-[15rem] flex-row gap-2 rounded-2xl border p-2 px-4 transition-all duration-1000 hover:font-bold"
          >
            <FaWhatsapp className="text-2xl text-green-500" />
            <span className="text-lg">Whatsapp</span>
          </Link>
        </div>
      </div>
      <ImageCard />
    </main>
  );
}
