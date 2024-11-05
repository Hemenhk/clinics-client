// components/Announcement.tsx
"use client";
import useScroll from "@/hooks/useScroll";
import { FaInstagram } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
  { icon: <MapPin size={15} />, content: "Sjöjungfruvägen 11" },
  { icon: <Mail size={15} />, content: "hemen.hiwakamal@hotmail.com" },
  { icon: <Phone size={15} />, content: "072-8465553" },
];

export default function Announcement() {
  const isScrolled = useScroll();
  const pathname = usePathname();

  const isHomePage = pathname === "/";


  return (
    <div
      className={`bg-[#a5b29f] transition-[padding,height,opacity] duration-500 ease-out overflow-hidden flex items-center justify-between px-10
        ${isHomePage && isScrolled ? "h-0 p-0 opacity-0" : "h-[5vh] p-2 opacity-100"}`}
    >
      <div className="text-[#ebf1e9]">
        <FaInstagram size={20} />
      </div>
      <ul className="flex flex-row items-center gap-3">
        {links.map((link) => (
          <li
            key={link.content}
            className="flex flex-row items-center gap-2 text-sm font-extralight text-[#ebf1e9]"
          >
            {link.icon}
            {link.content}
          </li>
        ))}
      </ul>
    </div>
  );
}
