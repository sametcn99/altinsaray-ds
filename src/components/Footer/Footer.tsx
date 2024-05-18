import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const siteNavigation = [
    {
      title: "Anasayfa",
      href: "/",
    },
    {
      title: "Hakkımızda",
      href: "#hakkimizda",
    },
    {
      title: "Galeri",
      href: "#galeri",
    },
    {
      title: "İletişim",
      href: "#iletisim",
    },
  ];

  const socialMedia = [
    {
      title: "Facebook",
      href: "https://www.facebook.com",
      icon: <FaFacebook />,
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com",
      icon: <FaInstagram />,
    },
    {
      title: "Twitter",
      href: "https://www.twitter.com",
      icon: <FaTwitter />,
    },
  ];
  return (
    <footer className="gradient mb-2 grid h-fit w-full grid-cols-2 rounded-2xl p-2 py-10 font-bold text-text-200">
      <div className="flex flex-col items-center">
        <div className="grid gap-2">
          {siteNavigation.map((item, index) => (
            <a key={index} href={item.href} className="text-sm ">
              {item.title}
            </a>
          ))}
        </div>
      </div>
      <div className="grid gap-2">
        {socialMedia.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex h-8 w-fit items-center justify-center gap-2 rounded-full bg-background-800 p-2 text-sm  hover:text-text-100"
          >
            {item.icon} <span>{item.title}</span>
          </a>
        ))}
      </div>
    </footer>
  );
}
