import React from "react";
import { cn } from "@dev/utils/class-util";

type SubtitleProps = {
  children: React.ReactNode; // Accepts any valid React node
  className?: string; // Optional for custom styles
  heading?: boolean;
};

function Subtitle({ children, className = "", heading }: SubtitleProps) {
  return (
    <h2
      className={cn(
        "font-semibold text-gray-deep leading-snug mt-8",
        heading ? "text-lg md:text-[22px] mt-2 mb-4 font-normal" : "text-xl font-semibold",
        className
      )}
    >
      {children}
    </h2>
  );
}

export default Subtitle;
