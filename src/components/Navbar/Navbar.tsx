import { navigationLinks } from "@/lib/navigation";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const linkClasses =
    "hover:font-semibold transition-all duration-300 hover:text-text-200";
  return (
    <nav
      className="sticky top-0 z-50 flex w-full items-center justify-between gap-2 border-b-2 py-2 text-2xl filter backdrop-blur-sm"
      id="navbar"
    >
      <div className="font-bold">Altın Saray</div>
      <div className="flex flex-row gap-2">
        {navigationLinks.map((link) => (
          <Link key={link.title} href={link.href} className={linkClasses}>
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
