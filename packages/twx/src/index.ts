import { clsx } from "@clutchd/clsx/lite";
import { twMerge } from "tailwind-merge";

export function twx(...inputs: unknown[]) {
  return twMerge(clsx(inputs));
}
