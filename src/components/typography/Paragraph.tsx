import React from 'react';
import { cn } from "@dev/utils/class-util";

type ParagraphProps = {
  children: React.ReactNode; // Accepts any valid React node
  className?: string; // Optional for custom styles
};

function Paragraph({ children, className = '' }: ParagraphProps) {
  return (
    <p className={cn("text-lg text-gray-700 leading-relaxed md:text-xl mt-5", className)}>
      {children}
    </p>
  );
}

export default Paragraph;
