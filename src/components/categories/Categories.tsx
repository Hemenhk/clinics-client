"use client";

import { getAllCategories } from "@/axios/categories/categories";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function Categories() {
  const { data: categoriesData } = useQuery({
    queryKey: ["treatment-categories"],
    queryFn: () => getAllCategories(),
  });
  return (
    <main className="flex flex-col items-center gap-10 p-28">
      <h2 className="text-4xl text-[#384533] font-semibold">
        Våra behandlingar
      </h2>
      <ul className="flex flex-row justify-center gap-5">
        {categoriesData?.length &&
          categoriesData.map((category) => (
            <Link
              href={`/behandlingar/${category.handle}`}
              key={category._id}
              className="relative overflow-hidden w-72 h-44 bg-white flex items-center justify-center text-2xl rounded-lg"
            >
              {category.name}
            </Link>
          ))}
      </ul>
    </main>
  );
}
