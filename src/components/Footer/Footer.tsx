import { navigationLinks } from "@/lib/navigation";
import { socialMedia } from "@/lib/socialMedia";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="gradient relative mb-2 grid h-fit w-full grid-cols-2 rounded-2xl p-2 py-10 font-bold text-text-200 shadow-2xl">
      <div className="flex flex-col items-center">
        <div className="grid gap-2">
          {navigationLinks.map((item, index) => (
            <a key={index} href={item.href} className="text-sm ">
              {item.title}
            </a>
          ))}
        </div>
      </div>
      <div className="grid gap-1">
        {socialMedia.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex h-8 w-fit items-center justify-center gap-2 rounded-full p-2 text-sm  hover:text-text-100"
          >
            {item.icon} <span>{item.title}</span>
          </a>
        ))}
      </div>
      <Link
        href="https://www.sametcc.me/"
        target="_blank"
        className="absolute bottom-2 left-1/2 -translate-x-1/2 transform text-sm text-text-100 transition-all duration-700 hover:scale-105 hover:text-text-200"
      >
        Tasarım
      </Link>
    </footer>
  );
}
