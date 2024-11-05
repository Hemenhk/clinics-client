// components/home/ScrollToTop.tsx
"use client";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "../ui/button";

type Props = {
  targetRef: React.MutableRefObject<HTMLElement | null>;
};

export default function ScrollToTop({ targetRef }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Show button when the user reaches or scrolls past the target
          setIsVisible(
            entry.isIntersecting ||
              window.scrollY > entry.boundingClientRect.top
          );
        });
      },
      { threshold: 0.1 }
    );

    // Observe the target element (Categories section)
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [targetRef]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsVisible(false); // Hide button after scrolling to top
  };

  // Conditionally render the button only when isVisible is true
  return isVisible ? (
    <Button
      onClick={handleScrollToTop}
      className="fixed z-50 right-14 bottom-20 p-3 rounded-full bg-[#899484] text-white shadow-md hover:bg-[#7a8678] transition duration-300"
    >
      <ChevronUp size={24} />
    </Button>
  ) : null;
}
