import InformationSection from "../Cards/InformationSection";
import Image from "next/image";
import DescriptionCard from "../Cards/DescriptionCard";
import { texts } from "@/lib/texts";
import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <InformationSection id="iletisim">
      <Image
        src={"/undraw_personal_information_re_vw8a.svg"}
        alt="Letter Icon"
        width={300}
        height={300}
        className=""
      />
      <DescriptionCard title={texts.iletisim.title}>
        <p>{texts.iletisim.description}</p>
        <div className="flex flex-col gap-4 pt-4 font-bold">
          <Link
            href={`tel:${texts.whatsapp}`}
            target="_blank"
            className="flex flex-row gap-2 transition-all duration-700 hover:font-black"
          >
            <FaPhoneAlt className="text-2xl text-green-500" />
            {texts.telephone}
          </Link>
          <Link
            href={`https://wa.me/${texts.whatsapp}`}
            target="_blank"
            className="flex flex-row gap-2 transition-all duration-700 hover:font-black"
          >
            <FaWhatsapp className="text-2xl text-green-500" />
            {texts.telephone}
          </Link>
        </div>
      </DescriptionCard>
    </InformationSection>
  );
}
