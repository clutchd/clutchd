import { ClassValue, clsx } from "clsx";
import { twMerge as merge } from "tailwind-merge";

function twMerge(...inputs: ClassValue[]) {
  return merge(clsx(inputs));
}

export { twMerge };
