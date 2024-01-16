// modified from https://github.com/dcastil/tailwind-merge/blob/main/src/lib/create-tailwind-merge.ts v1.14.0
// replaces twJoin with clsx

import { clsx } from "@clutchd/clsx";
import { Config } from "tailwind-merge";
import { createConfigUtils } from "./config-utils";
import { mergeClassList } from "./merge-classlist";

type CreateConfigFirst = () => Config;
type CreateConfigSubsequent = (config: Config) => Config;
type TailwindMerge = (...classLists: any[]) => string;
type ConfigUtils = ReturnType<typeof createConfigUtils>;

export function createTailwindMerge(
  ...createConfig: [CreateConfigFirst, ...CreateConfigSubsequent[]]
): TailwindMerge {
  let configUtils: ConfigUtils;
  let cacheGet: ConfigUtils["cache"]["get"];
  let cacheSet: ConfigUtils["cache"]["set"];
  let functionToCall = initTailwindMerge;

  function initTailwindMerge(classList: string) {
    const [firstCreateConfig, ...restCreateConfig] = createConfig;

    const config = restCreateConfig.reduce(
      (previousConfig, createConfigCurrent) =>
        createConfigCurrent(previousConfig),
      firstCreateConfig(),
    );

    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;

    return tailwindMerge(classList);
  }

  function tailwindMerge(classList: string) {
    const cachedResult = cacheGet(classList);

    if (cachedResult) {
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
