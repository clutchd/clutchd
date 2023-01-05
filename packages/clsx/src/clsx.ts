import { ClassValue, default as core } from "clsx";

function clsx(...inputs: ClassValue[]): string {
  return [...new Set(core(...inputs).split(" "))].join(" ");
}

export { clsx };
