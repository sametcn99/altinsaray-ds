import Link from "next/link";
import React from "react";

export default function Navbar() {
  const Links = [
    { href: "#hakkimizda", text: "Hakkımızda" },
    { href: "/", text: "Ana Sayfa" },
    { href: "#iletisim", text: "İletişim" },
  ];
  const linkClasses =
    "hover:font-semibold transition-all duration-300 hover:text-text-200";
  return (
    <nav
      className="sticky top-0 z-50 flex w-full items-center justify-center gap-2 py-2 text-2xl filter backdrop-blur-sm"
      id="navbar"
    >
      {Links.map((link) => (
        <Link key={link.text} href={link.href} className={linkClasses}>
          {link.text}
        </Link>
      ))}
    </nav>
  );
}
