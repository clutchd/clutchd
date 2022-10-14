import { ClassValue, default as core } from "clsx";

export function clsx(...inputs: ClassValue[]): string {
  return [...new Set(core(...inputs).split(" "))].join(" ");
}