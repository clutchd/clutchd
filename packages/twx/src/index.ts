import clsx, { type ClassValue } from "clsx/lite";
import { twMerge } from "tailwind-merge";

export function twx(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
