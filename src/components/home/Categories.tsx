// components/home/Categories.tsx
import React from "react";
import { PrimaryButton } from "../ui/primary-button";
import { Categories } from "@/types/axiosTypes";
import Link from "next/link";

// Define props type
type CategoriesProps = {
  categoriesData: Categories[]; // Adjust type as per your data structure
};

// Forward ref to allow ScrollToTop to observe this component
const Categories = React.forwardRef<HTMLElement, CategoriesProps>(
  ({ categoriesData }, ref) => {
    return (
      <section
        ref={ref}
        className="flex flex-col items-center gap-5 h-[80vh] py-24 px-10"
      >
        <h2 className="text-4xl font-semibold text-[#899484]">
          Våra behandlingar
        </h2>
        <ul className="flex flex-row items-center gap-5">
          {categoriesData?.map((category) => (
            <div
              key={category._id} // Use _id or other unique field as the key
              className="flex flex-col gap-5 justify-center items-center relative bg-white w-[420px] h-[320px] rounded-lg overflow-hidden"
            >
              <h2 className="text-2xl font-semibold text-[#384533]">
                {category.name}
              </h2>

              <Link href={`/behandlingar/${category.handle}`}>
                <PrimaryButton>Läs mer</PrimaryButton>
              </Link>
            </div>
          ))}
        </ul>
      </section>
    );
  }
);

Categories.displayName = "Categories";
export default Categories;
