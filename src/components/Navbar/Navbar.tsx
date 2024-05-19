"use client";
import React, { useState, useEffect } from "react";
import { navigationLinks } from "@/lib/navigation";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { Courgette } from "next/font/google";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const font = Courgette({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > 500) {
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
      className={cn(
        `absolute top-0 z-40 hidden w-full  select-none flex-row items-center gap-2 text-nowrap rounded-2xl px-4 text-2xl filter lg:flex  ${visible ? "justify-between backdrop-blur-sm" : "sticky top-0 justify-center"}`,
      )}
    >
      {visible && (
        <Link
          href="/"
          className={`${font.className} hidden select-none p-4 text-4xl text-text-200 lg:flex`}
          onDragStart={(e) => e.preventDefault()}
        >
          Altın Saray
          <br />
          Wedding Hall
        </Link>
      )}
      <div
        className={cn(
          ` flex flex-row justify-center gap-2  ${visible ? "" : "absolute left-0 top-2 z-40 w-full"}`,
        )}
      >
        <div
          className={cn(
            `flex flex-row flex-wrap justify-center gap-2  ${visible ? "" : "gradient w-fit rounded-2xl border p-4 text-base text-text-100 shadow-2xl"}`,
          )}
        >
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-all duration-700 hover:scale-105 hover:font-bold"
              onDragStart={(e) => e.preventDefault()}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      {visible && (
        <Link
          href={"tel:+905555555555"}
          className=" hidden flex-row items-center gap-2 transition-all duration-700 hover:font-medium lg:flex"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onDragStart={(e) => e.preventDefault()}
        >
          <div>
            <FaPhone
              className={cn(
                `m-2 inline rounded-2xl p-2 text-5xl transition-all duration-500 ${hover ? "rotate-12 font-bold text-green-500" : "rotate-0"}`,
              )}
            />
          </div>
          <div className="flex flex-col">
            <span>0555 555 55 55</span>
            <span className="text-sm">Bize Ulaşın</span>
          </div>
        </Link>
      )}
    </nav>
  );
}
