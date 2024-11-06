"use client";

import { useQuery } from "@tanstack/react-query";
import { getCategoryByHandle } from "@/axios/categories/categories";
import placeholderImage from "../../../public/bg.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import Image from "next/image";
import { PrimaryButton } from "../ui/primary-button";

export default function CategoryDetail({
  categoryHandle,
}: {
  categoryHandle: string;
}) {
  const {
    data: categoryData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["single-category", categoryHandle],
    queryFn: () => getCategoryByHandle(categoryHandle),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log("category", categoryData);

  const maxWordsToShow = 15;
  return (
    <main className="flex flex-col items-center gap-10 p-20">
      <h2 className="text-4xl text-[#384533] font-semibold capitalize">
        {categoryHandle}
      </h2>
      <ul className="grid grid-cols-3 justify-center gap-5">
        {categoryData?.treatments?.map((treatment) => {
          const description = treatment.description || "";
          const wordsArray = description.split(" ");
          const isLongDescription = wordsArray.length > maxWordsToShow;

          const collapsedText = isLongDescription
            ? wordsArray.slice(0, maxWordsToShow).join(" ") + "..."
            : description;

          return (
            <Card
              key={treatment._id}
              className="w-[300px] flex flex-col relative overflow-hidden bg-white justify-center text-2xl rounded-lg"
            >
              <CardHeader className="relative w-full h-64 overflow-hidden p-0 group">
                <Image
                  src={placeholderImage}
                  alt="bilder av olika typer av behandlingar"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </CardHeader>
              <CardContent className="flex flex-col h-40 gap-3 py-5">
                <h4 className="text-lg font-medium tracking-wide text-[#384533]">
                  {treatment.name}
                </h4>
                <p className="text-sm text-[#384533ad]">
                  {isLongDescription && collapsedText}
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/behandlingar/${categoryHandle}/${treatment.handle}`}
                >
                  <PrimaryButton className="h-10 w-24">Läs mer</PrimaryButton>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </ul>
    </main>
  );
}
