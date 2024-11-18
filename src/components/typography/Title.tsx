import React from "react";
import { cn } from "@dev/utils/class-util";

type TitleProps = {
  children: React.ReactNode; // Accepts any valid React node
  className?: string; // Optional for custom styles
};

function Title({ children, className = "" }: TitleProps) {
  return (
    <h1
      className={cn(
        "text-3xl md:text-4xl font-bold text-gray-800 leading-tight",
        className
      )}
    >
      {children}
    </h1>
  );
}

export default Title;
