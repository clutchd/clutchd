// https://github.com/dcastil/tailwind-merge/blob/main/src/lib/tw-merge.ts

import { clsx } from "@clutchd/clsx";
import { get, set } from "./lru-cache";
import { mergeClassList } from "./merge-classlist";

function twx(...args: any[]) {
  let classList = clsx(...args);
  let result = get(classList);

  if (result) {
    return result;
  }

  result = mergeClassList(classList);
  set(classList, result);

  return result;
}

export { twx };
