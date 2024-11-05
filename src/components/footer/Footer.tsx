import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const links = [
  {
    name: "Instagram",
    icon: <FaInstagram size={25} />,
    href: "https://www.instagram.com/",
  },
  {
    name: "Facebook",
    icon: <FaFacebookF size={22} />,
    href: "https://www.facebook.com/",
  },
];

export default function Footer() {
  return (
    <footer className="w-full flex flex-col justify-end min-h-56 bg-[#586f4ce3] space-y-5 p-5 md:p-10 text-[#ebf1e9]">
      <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center border-b-[0.4px] pb-5 border-[#ebf1e9]">
        <h2 className="text-2xl font-semibold pb-3">Kliniken.</h2>
        <ul className="flex flex-row gap-4 text-xs font-light"></ul>
      </div>

      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-3">
          <p className="text-xs md:text-sm font-light">Crafted by Hemen.</p>
          <p className="text-xs font-light text-[#ebf1e9]">
            © 2024 Kliniken. All rights reserved
          </p>
        </div>
        <ul className="hidden md:flex flex-row items-center justify-end gap-3 size-10">
          {links.map((link) => (
            <a href={link.href} target="_blank" key={link.name}>
              <div className="bg-[#ebf1e9] text-[#586f4ce3] flex justify-center items-center size-10 rounded-full relative group">
                <div className="absolute inset-0  rounded-full border-2 border-transparent group-hover:border-neutral-300 group-hover:animate-ping-once"></div>
                {link.icon}
              </div>
            </a>
          ))}
        </ul>
      </div>
      <div className="flex flex-row justify-between items-center">
        <ul className="flex md:hidden flex-row items-center mt-2 gap-3 size-10">
          {links.map((link) => (
            <a href={link.href} target="_blank" key={link.name}>
              <div className="bg-neutral-300 text-neutral-900 flex justify-center items-center size-10 rounded-full relative group">
                <div className="absolute inset-0  rounded-full border-2 border-transparent group-hover:border-neutral-300 group-hover:animate-ping-once"></div>
                {link.icon}
              </div>
            </a>
          ))}
        </ul>
      </div>
    </footer>
  );
}
