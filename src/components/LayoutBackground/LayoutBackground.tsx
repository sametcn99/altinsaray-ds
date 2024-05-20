"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion"; // Framer Motion import edildi

export default function LayoutBackground() {
  const elementCount = 5;

  return (
    <>
      {Array.from({ length: elementCount }).map((_, index) => (
        <motion.div // motion.div kullanıldı
          key={index}
          className={cn(
            "fixed left-0 top-0 -z-10 h-full w-full text-red-800  opacity-70",
          )}
          initial={{ y: -50 }}
          animate={{
            y: [Math.random() * 1000, Math.random() * 1000],
            x: [Math.random() * 1000, Math.random() * 1000],
          }}
          transition={{
            ease: "linear",
            duration: 20,
            repeatType: "reverse",
            repeat: Infinity,
          }}
        >
          <FaHeart size={50} />
        </motion.div>
      ))}
    </>
  );
}
