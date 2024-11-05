import React from "react";
import { PrimaryButton } from "../ui/primary-button";

const perks = [
  {
    heading: "Personlig Vård",
    content:
      "Vi ser varje klient som unik och anpassar behandlingen efter dina behov, för bästa möjliga resultat och omsorg.",
  },
  {
    heading: "Lugn Miljö",
    content:
      "Vår klinik erbjuder en harmonisk atmosfär där du kan koppla av och hämta ny energi i en lugn miljö.",
  },
  {
    heading: "Erfarna Experter",
    content:
      "Vårt erfarna team av experter inom massage, hudvård och fysioterapi erbjuder trygg och effektiv behandling.",
  },
];

export default function Perks() {
  return (
    <section className="flex flex-row items-center gap-10 h-full w-full p-10">
      {perks.map((perk) => (
        <div key={perk.heading} className="flex flex-col items-center gap-6 text-center">
          <div className="size-44 rounded-full bg-white" />
          <h2 className="text-3xl font-semibold text-[#384533]">
            {perk.heading}
          </h2>
          <p className="text-lg font-light text-[#384533ad]">{perk.content}</p>
          <PrimaryButton>Läs mer</PrimaryButton>
        </div>
      ))}
    </section>
  );
}
