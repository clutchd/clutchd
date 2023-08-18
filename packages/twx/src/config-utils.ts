// unmodified from https://github.com/dcastil/tailwind-merge/blob/main/src/lib/config-utils.ts v1.14.0

import { createClassUtils } from "./class-utils";
import { createLruCache } from "./lru-cache";
import { createSplitModifiers } from "./modifier-utils";
import { Config } from "tailwind-merge";

export type ConfigUtils = ReturnType<typeof createConfigUtils>;

export function createConfigUtils(config: Config) {
  return {
    cache: createLruCache<string, string>(config.cacheSize),
    splitModifiers: createSplitModifiers(config),
    ...createClassUtils(config),
  };
}
