// unmodified from https://github.com/dcastil/tailwind-merge/blob/main/src/lib/tw-merge.ts v1.14.0

import { createTailwindMerge } from "./create-tailwind-merge";
import { getDefaultConfig } from "tailwind-merge";

export const twMerge = createTailwindMerge(getDefaultConfig);
