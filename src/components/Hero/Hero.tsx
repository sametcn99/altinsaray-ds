import { ImageCard } from "../Cards/ImageCard";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import IconButton from "../Buttons/IconButton";
import { ImLocation } from "react-icons/im";
import Link from "next/link";
import Modal from "../ui/Modal";

export default function Hero() {
  return (
    <main
      className="relative flex flex-col  items-center justify-center gap-4 py-32 selection:bg-text-300 selection:text-text-900"
      id="hosgeldiniz"
    >
      <p className="max-w-[50rem] text-4xl font-light">
        Özel günlerinizi unutulmaz kılmak için.
      </p>
      <h1 className="gradient text-nowrap bg-clip-text text-center text-4xl font-black text-transparent sm:text-8xl">
        Altın Saray
        <br />
        Wedding Hall
      </h1>
      <div className="flex select-none flex-col flex-wrap gap-2 pt-4">
        <Link
          target="_blank"
          href={
            "https://www.google.com/maps?ll=39.890812,32.84109&z=20&t=m&hl=en&gl=TR&mapclient=embed&cid=16277603766031075323"
          }
          className="flex select-text flex-row items-center gap-1"
        >
          <ImLocation className="text-text-600" />
          <span>Harbiye Zarif Sk. No:1 Çankaya/ANKARA</span>
        </Link>
        <Modal>
          <div className="flex flex-col flex-wrap gap-2">
            <Link
              href={"tel:+904444444"}
              className="flex w-full flex-row gap-2 rounded-2xl border p-2 px-4 transition-all duration-1000 hover:font-bold"
            >
              <FaPhoneAlt className="text-2xl text-green-500" />
              <span className="text-lg">+90 444 44 44</span>
            </Link>
            <Link
              href={"https://wa.me/+904444444"}
              className="flex flex-row gap-2 rounded-2xl border p-2 px-4 transition-all duration-1000 hover:font-bold"
            >
              <FaWhatsapp className="text-2xl text-green-500" />
              <span className="text-lg">Whatsapp</span>
            </Link>
          </div>
        </Modal>
      </div>
    </main>
  );
}
