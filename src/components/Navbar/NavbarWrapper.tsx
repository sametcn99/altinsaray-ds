"use client";
import { useState, useEffect } from "react";
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
