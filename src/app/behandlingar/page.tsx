import Link from "next/link";

const categories = [
  { heading: "Massage & Friskvård", href: `/behandlingar/massage` },
  { heading: "Laser", href: `/behandlingar/laser-harbortagning` },
  { heading: "Hudvård & Skönhet", href: `/behandlingar/laser-harbortagning` },
];

export default function TreatmentCategoriesPage() {
  return (
    <main className="flex flex-col items-center gap-10 bg-[#e4e9e1] p-28">
      <h2 className="text-4xl text-[#384533] font-semibold">
        Våra behandlingar
      </h2>
      <ul className="flex flex-row justify-center gap-5">
        {categories.map((category) => (
          <Link
            href={category.href}
            key={category.heading}
            className="relative overflow-hidden w-72 h-44 bg-white flex items-center justify-center text-2xl rounded-lg"
          >
            {category.heading}
          </Link>
        ))}
      </ul>
    </main>
  );
}
