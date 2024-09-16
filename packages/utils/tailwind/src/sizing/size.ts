import type { Arbitrary, WithVariants } from "../core";
import type { CommonSizeVariants } from "./common";

type SizeVariants = CommonSizeVariants | Arbitrary;

/**
 * The `Size` tailwindcss classes.
 * @see https://tailwindcss.com/docs/size
 */
export type Size = WithVariants<"size", SizeVariants>;

export interface WithSize {
  /**
   * The `Size` tailwindcss classes.
   * @see https://tailwindcss.com/docs/size
   */
  size?: Size;
}
