// modified from https://github.com/dcastil/tailwind-merge/blob/main/src/index.ts v1.14.0
// replaces createTailwindMerge with createTwx
// replaces extendTailwindMerge with extendTwx
// replaces twJoin with clsx
// replaces twMerge with twx

export { createTailwindMerge as createTwx } from "./create-tailwind-merge";
export { getDefaultConfig } from "tailwind-merge";
export { extendTailwindMerge as extendTwx } from "./extend-tailwind-merge";
export { fromTheme } from "tailwind-merge";
export { mergeConfigs } from "tailwind-merge";
export { clsx } from "@clutchd/clsx";
export { twMerge as twx } from "./tw-merge";
export type { Config } from "./twx.types";
export { validators } from "tailwind-merge";
