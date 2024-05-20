"use client";
import { useState } from "react";
import { navigationLinks } from "@/lib/navigation";
import Link from "next/link";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";
import { Courgette } from "next/font/google";
import { cn } from "@/lib/utils";
import { texts } from "@/lib/texts";

const font = Courgette({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Navbar() {
  const [hover, setHover] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav
      id="navbar"
      className={cn(
        `z-50 flex w-full select-none flex-row flex-wrap items-center justify-between gap-2 text-nowrap rounded-2xl px-4 text-2xl lg:justify-between`,
      )}
    >
      <Link
        href="/"
        className={`${font.className} gradient flex select-none bg-clip-text p-4 text-3xl`}
        onDragStart={(e) => e.preventDefault()}
      >
        Altın Saray
        <br />
        Wedding Hall
      </Link>
      <div className="lg:hidden">
        <button className="text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div
        className={cn(
          `fixed right-7 top-16 z-50 mt-12 w-[16rem] flex-col items-center justify-between gap-2 rounded-2xl bg-background-300 bg-opacity-70 p-2 backdrop-blur-sm lg:static lg:flex lg:w-auto lg:flex-row lg:bg-transparent`,
          {
            hidden: !menuOpen,
            flex: menuOpen,
          },
          ``,
        )}
      >
        <div className={cn(`flex flex-col items-center gap-2 lg:flex-row`)}>
          {navigationLinks.map((link) => (
            <button
              key={link.href}
              className="transition-all duration-1000 hover:scale-105 hover:font-bold"
              onDragStart={(e: any) => e.preventDefault()}
              onClick={() => handleClick(link.id)}
            >
              {link.title}
            </button>
          ))}
        </div>
        {menuOpen && (
          <Link
            href={`tel:${texts.whatsapp}`}
            className="flex flex-row items-center gap-2 transition-all duration-700 hover:font-medium lg:hidden"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onDragStart={(e) => e.preventDefault()}
          >
            <FaPhone
              className={cn(
                `m-2 inline -scale-x-90 transform rounded-2xl  text-4xl transition-all duration-500`,
                hover ? "rotate-6 font-bold text-green-500" : "",
              )}
            />
            <div className={cn("flex flex-col")}>
              <span>{texts.telephone}</span>
              <span className="text-sm">Bize Ulaşın</span>
            </div>
          </Link>
        )}
      </div>
      <Link
        href={`tel:${texts.whatsapp}`}
        className="hidden flex-row items-center gap-2 transition-all duration-700 hover:font-medium lg:flex"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onDragStart={(e) => e.preventDefault()}
      >
        <FaPhone
          className={cn(
            `m-2 inline -scale-x-90 transform rounded-2xl  text-4xl transition-all duration-500`,
            hover ? "rotate-6 font-bold text-green-500" : "",
          )}
        />
        <div className={cn("flex flex-col")}>
          <span>{texts.telephone}</span>
          <span className="text-sm">Bize Ulaşın</span>
        </div>
      </Link>
    </nav>
  );
}
