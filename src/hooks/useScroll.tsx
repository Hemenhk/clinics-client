"use client";
import { useEffect, useState } from "react";

function debounce(func: (...args: any) => void, wait: number) {
  let timeout: NodeJS.Timeout;
  return function (...args: any) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default function useScroll(threshold: number = 1) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = debounce(() => {
      setIsScrolled(window.scrollY > threshold);
    }, 10); // Reduced debounce delay for more responsiveness

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return isScrolled;
}
