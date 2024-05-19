"use client";
import React, { useState, useEffect } from "react";
import { navigationLinks } from "@/lib/navigation";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { Courgette } from "next/font/google";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import MiniNavbar from "./MiniNavbar";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [miniNavbar, setMiniNavbar] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > 300) {
        console.log("miniNavbar");
        setMiniNavbar(true);
      } else {
        setMiniNavbar(false);
      }
      setScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);
  return <>{miniNavbar ? <MiniNavbar /> : <Navbar />}</>;
}
