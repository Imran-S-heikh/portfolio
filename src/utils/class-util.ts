import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export default function classUtil(
  ...classes: (string | null | undefined | boolean)[]
) {
  return classes.filter(Boolean).join(" ");
}


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}