import { ImageCard } from "../Cards/ImageCard";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import IconButton from "../Buttons/IconButton";
import { ImLocation } from "react-icons/im";
import Link from "next/link";

export default function Hero() {
  return (
    <main
      className="relative flex flex-row flex-wrap-reverse items-center justify-center gap-4 selection:bg-text-300 selection:text-text-900"
      id="hosgeldiniz"
    >
      <div className="max-w-xl">
        <h1 className=" gradient text-nowrap bg-clip-text  text-center text-4xl font-black text-transparent sm:text-6xl  lg:text-left">
          Altın Saray
          <br />
          Wedding Hall
        </h1>
        <p className="font-light">
          Özel günlerinizi unutulmaz kılmak için, zarafet ve şıklığın buluştuğu
          eşsiz bir atmosferde, hayalinizdeki düğünü gerçeğe dönüştürüyoruz.
        </p>
        <div className="flex select-none flex-col flex-wrap gap-2 pt-4">
          <div className="flex select-text flex-row items-center gap-1">
            <ImLocation className="text-text-600" />
            <span>Harbiye Zarif Sk. No:1 Çankaya/ANKARA</span>
          </div>
          <div className="flex flex-row flex-wrap gap-2">
            <Link href={"tel:+904444444"}>
              <IconButton>
                <FaPhoneAlt className="text-2xl text-green-500" />
                <span className="text-lg">+90 444 44 44</span>
              </IconButton>
            </Link>
            <Link href={"https://wa.me/+904444444"}>
              <IconButton>
                <FaWhatsapp className="text-2xl text-green-500" />
                <span className="text-lg">Whatsapp</span>
              </IconButton>
            </Link>
          </div>
        </div>
      </div>
      <ImageCard />
    </main>
  );
}
