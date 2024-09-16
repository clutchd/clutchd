import type { Arbitrary, WithVariants } from "../core";
import type { CommonSizeVariants, DynamicHeightVariants } from "./common";

type HeightVariants =
  | CommonSizeVariants
  | "screen"
  | DynamicHeightVariants
  | Arbitrary;

/**
 * The `Height` tailwindcss classes.
 * @see https://tailwindcss.com/docs/height
 */
export type Height = WithVariants<"h", HeightVariants>;

export interface WithHeight {
  /**
   * The `Height` tailwindcss classes.
   * @see https://tailwindcss.com/docs/height
   */
  height?: Height;
}
