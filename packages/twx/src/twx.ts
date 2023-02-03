import { twMerge } from "./tailwind-merge/src";

function twx(...args: any[]) {
  return twMerge(...args);
}

export { twx };
