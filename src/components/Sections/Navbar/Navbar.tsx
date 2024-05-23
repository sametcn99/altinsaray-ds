"use client";
import { useRef, useState } from "react";
import { navigationLinks } from "@/lib/navigation";
import Link from "next/link";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";
import { Courgette } from "next/font/google";
import { cn } from "@/lib/utils";
import { texts } from "@/lib/texts";
import { useOnClickOutside } from "usehooks-ts";
import { motion } from "framer-motion";

const font = Courgette({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Navbar() {
  const [hover, setHover] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef(null);
  const handleClickOutside = () => {
    // Your custom logic here
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu after clicking
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      id="navbar"
      className={cn(
        `flex w-full select-none flex-row flex-wrap items-center justify-between text-nowrap rounded-2xl text-xl lg:justify-between`,
      )}
      ref={ref}
    >
      <Link
        href="/"
        className={`${font.className} gradient flex select-none bg-clip-text text-2xl`}
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
          `fixed right-7 top-16 z-50 mt-12 w-[16rem] flex-col items-center justify-between gap-2 rounded-2xl bg-background-300 bg-opacity-70 backdrop-blur-sm lg:static lg:flex lg:w-auto lg:flex-row lg:bg-transparent`,
          {
            hidden: !menuOpen,
            flex: menuOpen,
          },
          ``,
        )}
      >
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
      <Link
        href="/yonlendir/tel"
        target="_blank"
        className="hidden flex-row items-center gap-2 transition-all duration-700 hover:font-medium lg:flex"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onDragStart={(e) => e.preventDefault()}
      >
        <FaPhone
          className={cn(
            `m-2 inline -scale-x-90 transform rounded-2xl  text-3xl transition-all duration-500`,
            hover ? "rotate-6 font-bold text-green-500" : "",
          )}
        />
        <div className={cn("flex flex-col")}>
          <span className="text-sm">Bize Ulaşın</span>
          <span>{texts.telephone}</span>
        </div>
      </Link>
    </motion.nav>
  );
}
