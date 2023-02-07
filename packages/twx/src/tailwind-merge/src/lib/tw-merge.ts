import { clsx } from "@clutchd/clsx";
import { cacheGet, cacheSet } from "./lru-cache";
import { mergeClassList } from "./merge-classlist";

export function twMerge(...args: any[]) {
  let classList = clsx(...args);
  const cachedResult = cacheGet(classList);

  if (cachedResult) {
    return cachedResult;
  }

  const result = mergeClassList(classList);
  cacheSet(classList, result);

  return result;
}
