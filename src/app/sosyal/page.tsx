import { socialMedia } from "@/lib/socialMedia";
import Link from "next/link";
import React from "react";
import InformationSection from "@/components/Cards/InformationSection";
import { FaMap, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Page() {
  return (
    <InformationSection>
      <div className="flex flex-col items-center justify-center gap-2 font-medium">
        <h1 className="text-3xl font-bold">Bağlantılı Linkler</h1>
        {socialMedia.map((link, index) => (
          <Link
            key={index}
            href={`/yonlendir/${link.title.toLowerCase()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-[15rem] items-center gap-2 rounded-2xl border p-2 transition-all duration-300 hover:bg-background-700 hover:font-bold hover:underline"
          >
            {link.icon}
            {link.title}
          </Link>
        ))}
        <Link
          href={`/yonlendir/telefon`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-[15rem] items-center gap-2 rounded-2xl border p-2 transition-all duration-300 hover:bg-background-700 hover:font-bold hover:underline"
        >
          <FaPhone className="-scale-x-90 " /> Telefon
        </Link>
        <Link
          href={`/yonlendir/whatsapp`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-[15rem] items-center gap-2 rounded-2xl border p-2 transition-all duration-300 hover:bg-background-700 hover:font-bold hover:underline"
        >
          <FaWhatsapp /> Whatsapp
        </Link>
        <Link
          href={`/yonlendir/harita`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-[15rem] items-center gap-2 rounded-2xl border p-2 transition-all duration-300 hover:bg-background-700 hover:font-bold hover:underline"
        >
          <FaMap /> Harita
        </Link>
      </div>
    </InformationSection>
  );
}
