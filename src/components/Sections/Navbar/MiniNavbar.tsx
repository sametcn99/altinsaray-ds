"use client";
import { navigationLinks } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

export default function MiniNavbar() {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.nav
      variants={container}
      initial="hidden"
      animate="visible"
      className={cn(
        `sticky left-1/2 top-2 z-40 flex w-full select-none flex-row items-center justify-center gap-2 text-nowrap rounded-2xl px-4 text-2xl`,
      )}
    >
      <motion.div
        variants={item}
        className={cn(
          `navbar flex w-fit flex-row flex-wrap justify-center gap-2 rounded-2xl border p-4 text-base text-text-100 shadow-2xl`,
        )}
      >
        {navigationLinks.map((link) => (
          <motion.button
            variants={item}
            key={link.href}
            className="transition-all duration-700 hover:scale-105 hover:font-bold"
            onDragStart={(e: any) => e.preventDefault()}
            onClick={() => handleClick(link.id)}
          >
            {link.title}
          </motion.button>
        ))}
      </motion.div>
    </motion.nav>
  );
}
