"use client";
import React, { useState, useEffect } from "react";
import { navigationLinks } from "@/lib/navigation";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["vietnamese"],
  weight: ["700"],
});

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > 200) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  return (
    <nav
      id="navbar"
      className={`gap-2px-4 sticky top-0 z-40 flex w-full flex-row items-center text-2xl filter  ${visible ? " justify-between border-b-2 backdrop-blur-sm" : "justify-center"}`}
    >
      {visible && (
        <div
          className={`${dancingScript.className} gradient bg-clip-text text-4xl text-transparent`}
        >
          Altın Saray
          <br />
          Wedding Hall
        </div>
      )}
      <div
        className={` flex flex-row justify-center gap-2  ${visible ? "" : "absolute left-0 top-2 z-40 w-full"}`}
      >
        <div
          className={`flex flex-row gap-2 ${visible ? "" : "gradient w-fit rounded-2xl p-4 text-text-100 shadow-2xl"}`}
        >
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-all duration-700 hover:scale-105 hover:font-bold"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      {visible && (
        <div className="flex flex-row items-center gap-2">
          <FaPhone className="m-2 inline rounded-2xl border-2 p-2 text-5xl text-green-500" />
          <div className="flex flex-col">
            <a href="tel:+905555555555">0555 555 55 55</a>
            <span className="text-sm">Bize Ulaşın</span>
          </div>
        </div>
      )}
    </nav>
  );
}
