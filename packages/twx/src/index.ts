import clsx, { type ClassValue } from "clsx/lite";
import { twMerge } from "tailwind-merge";

export function twx(...inputs: unknown[]) {
  return twMerge(clsx(...(inputs as ClassValue[])));
}
