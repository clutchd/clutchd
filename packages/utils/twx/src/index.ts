import { clsx } from "@clutchd/clsx";
import { twMerge } from "tailwind-merge";

export function twx(...inputs: unknown[]) {
  return twMerge(clsx(inputs));
}
