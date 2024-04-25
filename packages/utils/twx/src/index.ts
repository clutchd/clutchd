import { clsx } from "@clutchd/clsx";
import { twMerge } from "tailwind-merge";

export function twx(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
