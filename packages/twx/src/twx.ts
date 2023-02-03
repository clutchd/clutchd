import { clsx } from "@clutchd/clsx";
import { twMerge } from "./tailwind-merge/src";

function twx(...args: any[]) {
  return twMerge(clsx(...args));
}

export { twx };
