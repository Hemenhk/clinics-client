"use client";
import React, { useRef } from "react";
import Image from "next/image";
import bgImage from "../../public/bg.jpg";
import { Button } from "@/components/ui/button";
import { PrimaryButton } from "@/components/ui/primary-button";
import Perks from "@/components/home/Perks";
import Categories from "@/components/home/Categories";
import Contact from "@/components/home/Contact";
import ScrollToTop from "@/components/home/ScrollToTop";

export default function Home() {
  const categoriesRef = useRef<HTMLElement | null>(null);

  return (
    <main className="bg-[#e4e9e1] w-full flex flex-col justify-center items-center p-10">
      <section className="w-full h-[75vh] rounded-lg bg-white relative overflow-hidden">
        <Image
          src={bgImage}
          alt="background image"
          layout="fill"
          objectFit="cover"
          className="brightness-[.6]"
        />
        <div className="z-40 relative h-full text-center flex flex-col gap-5 items-center justify-center">
          <h2 className="text-6xl w-2/5 font-semibold tracking-tight text-[#ebf1e9]">
            För din kropp och sinnes välmående
          </h2>
          <p className="text-xl w-2/5 text-[#e3e4e2e7]">
            Vägen till ett sundare välmående börjar hos oss på Kliniken. Nå ut
            idag för att må bättre!
          </p>
          <div className="flex flex-row gap-4 items-center">
            <PrimaryButton className="py-4 text-lg font-extralight border-none">
              Se behandlingar
            </PrimaryButton>
            <Button className="p-7 w-48 bg-transparent shadow-none border border-[#ebf1e9] transition ease-out duration-500 hover:bg-[#899484] hover:border-[#899484] text-lg font-extralight tracking-wide rounded-full">
              Kontakta oss
            </Button>
          </div>
        </div>
      </section>
      <section ref={categoriesRef} className="flex flex-col items-center">
        <Perks />
        <Categories ref={categoriesRef} />
        <Contact />
      </section>

      <div className="fixed z-50 right-14 bottom-20 animate-fade-in-left">
        <ScrollToTop targetRef={categoriesRef} />
      </div>
    </main>
  );
}
