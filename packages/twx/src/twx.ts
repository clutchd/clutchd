import { clsx } from "@clutchd/clsx";
import { twMerge } from "tailwind-merge";

function twx(...args: any[]) {
  return twMerge(clsx(...args));
}

export { twx };
