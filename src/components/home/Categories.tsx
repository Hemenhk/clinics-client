// components/home/Categories.tsx
import React from "react";
import { PrimaryButton } from "../ui/primary-button";

const categories = [
  { heading: "Massage & Friskvård" },
  { heading: "Laser" },
  { heading: "Hudvård & Skönhet" },
];

// Forward ref to allow ScrollToTop to observe this component
const Categories = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="flex flex-col items-center gap-5 h-[80vh] py-24 px-10">
      <h2 className="text-4xl font-semibold text-[#899484]">
        Våra behandlingar
      </h2>
      <ul className="flex flex-row items-center gap-5">
        {categories.map((category) => (
          <div
            key={category.heading}
            className="flex flex-col gap-5 justify-center items-center relative bg-white w-[420px] h-[320px] rounded-lg overflow-hidden"
          >
            <h2 className="text-2xl font-semibold text-[#384533]">
              {category.heading}
            </h2>
            <PrimaryButton>Läs mer</PrimaryButton>
          </div>
        ))}
      </ul>
    </section>
  );
});

Categories.displayName = "Categories";
export default Categories;
