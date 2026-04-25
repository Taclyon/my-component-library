import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Esta función es el "colador" mágico
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}