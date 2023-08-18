// unmodified from https://github.com/dcastil/tailwind-merge/blob/main/src/lib/extend-tailwind-merge.ts v1.14.0

import { createTailwindMerge } from "./create-tailwind-merge";
import { getDefaultConfig, mergeConfigs } from "tailwind-merge";
import { Config } from "./twx.types";

type CreateConfigSubsequent = (config: Config) => Config;

export function extendTailwindMerge(
  configExtension: Partial<Config> | CreateConfigSubsequent,
  ...createConfig: CreateConfigSubsequent[]
) {
  return typeof configExtension === "function"
    ? createTailwindMerge(getDefaultConfig, configExtension, ...createConfig)
    : createTailwindMerge(
        () => mergeConfigs(getDefaultConfig(), configExtension),
        ...createConfig
      );
}
