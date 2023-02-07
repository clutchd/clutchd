import { clsx } from "@clutchd/clsx";
import { mergeClassList } from "./merge-classlist";
import { getDefaultConfig } from "./default-config";
import { createLruCache } from "./lru-cache";
import { createSplitModifiers } from "./modifier-utils";
import { createClassUtils } from "./class-utils";

type TailwindMerge = (...classLists: any[]) => string;

export function createTailwindMerge(): TailwindMerge {
  let configUtils = {
    cache: createLruCache<string, string>(getDefaultConfig().cacheSize),
    splitModifiers: createSplitModifiers(getDefaultConfig()),
    ...createClassUtils(getDefaultConfig()),
  };
  let cacheGet = configUtils.cache.get;
  let cacheSet = configUtils.cache.set;
  let functionToCall = tailwindMerge;

  function tailwindMerge(classList: string) {
    const cachedResult = cacheGet(classList);

    if (cachedResult) {
      console.log(classList + " => " + cachedResult);
      return cachedResult;
    }

    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);

    return result;
  }

  return function callTailwindMerge() {
    return functionToCall(clsx.apply(null, arguments as any));
  };
}
