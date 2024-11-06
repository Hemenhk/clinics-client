// components/Header.tsx
"use client";
import useScroll from "@/hooks/useScroll";
import { Button } from "../ui/button";
import Announcement from "./Announcement";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const isScrolled = useScroll();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header className="transition-all duration-500 ease-in-out w-full relative z-50">
      <Announcement />
      <div
        className={`flex flex-row items-center h-[13vh] w-full justify-between bg-[#b0bdaa] px-10 transition-all duration-300 ease-in-out
          ${isHomePage && isScrolled ? "fixed top-0 z-50" : ""}`}
      >
        <Link
          href={"/"}
          className={`text-[#ebf1e9] transition-all duration-500 ease-out ${
            isHomePage && isScrolled ? "text-2xl" : "text-3xl"
          } font-semibold tracking-tight `}
        >
          Logo
        </Link>
        <div className="flex flex-row items-center gap-3">
          <nav>
            <ul className="flex flex-row gap-3 text-[#ebf1e9] text-lg">
              <li>Hem</li>
              <li>Behandlingar</li>
              <li>Personal</li>
            </ul>
          </nav>
          <Button className="bg-[#b0bdaa] shadow-none border border-[#ebf1e9] text-[#ebf1e9] text-xl rounded-full p-5">
            Boka nu
          </Button>
        </div>
      </div>
    </header>
  );
}
