"use client";
import { useState } from "react";
import { navigationLinks } from "@/lib/navigation";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { Courgette } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Courgette({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hover, setHover] = useState(false);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      id="navbar"
      className={cn(
        `z-40 flex w-full select-none flex-row flex-wrap items-center justify-center gap-2 text-nowrap rounded-2xl px-4 text-2xl filter backdrop-blur-sm lg:justify-between`,
      )}
    >
      <Link
        href="/"
        className={`${font.className} flex select-none p-4 text-4xl text-text-200`}
        onDragStart={(e) => e.preventDefault()}
      >
        Altın Saray
        <br />
        Wedding Hall
      </Link>
      <div className={cn(` flex min-w-64 flex-row justify-center gap-2`)}>
        <div className={cn(`flex flex-row flex-wrap justify-center gap-2`)}>
          {navigationLinks.map((link) => (
            <button
              key={link.href}
              className="transition-all duration-700 hover:scale-105 hover:font-bold"
              onDragStart={(e: any) => e.preventDefault()}
              onClick={() => handleClick(link.id)}
            >
              {link.title}
            </button>
          ))}
        </div>
      </div>
      <Link
        href={"tel:+905555555555"}
        className="flex flex-row items-center gap-2 transition-all duration-700 hover:font-medium"
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
    </nav>
  );
}
