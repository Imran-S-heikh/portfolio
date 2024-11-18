import { cn } from "@dev/utils/class-util";

interface UlProps {
  children: React.ReactNode;
  className?: string;
}

export function Ul({ children, className }: UlProps) {
  return <ul className={cn("list-disc", className)}>{children}</ul>;
}

export function Li({ children, className }: UlProps) {
  return (
    <li className={cn("text-xl ml-[30px] mt-[18px] text-gray-700 leading-relaxed md:text-lg", className)}>{children}</li>
  );
}

export function Ol({ children, className }: UlProps) {
  return (
    <ol className={cn("text-xl ml-[30px] mt-[18px]", className)}>{children}</ol>
  );
}
