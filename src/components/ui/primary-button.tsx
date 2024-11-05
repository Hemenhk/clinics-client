import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define the variants with default classes
const primaryButtonVariants = cva(
  "relative inline-flex items-center justify-center overflow-hidden font-extralight transition duration-300 ease-out rounded-full shadow-md group border-none", // Adds default styles including "font-extralight" and removes border
  {
    variants: {
      size: {
        default: "p-7 py-3 text-lg", // Sets padding, width, and font size as default
        sm: "px-4 py-2 text-xs w-36",
        lg: "px-8 py-4 text-xl w-60",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof primaryButtonVariants> {
  asChild?: boolean;
}

const PrimaryButton = React.forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ className, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          primaryButtonVariants({ size, className }),
          "bg-[#899484] text-[#ebf1e9]" // Sets the default background and text color
        )}
        ref={ref}
        {...props}
      >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-500 -translate-x-full bg-[#899484] group-hover:translate-x-0 ease">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-[#ebf1e9] transition-all duration-300 transform group-hover:translate-x-full ease">
          {children}
        </span>
        <span className="relative invisible">{children}</span>
      </Comp>
    );
  }
);

PrimaryButton.displayName = "PrimaryButton";

export { PrimaryButton, primaryButtonVariants };
