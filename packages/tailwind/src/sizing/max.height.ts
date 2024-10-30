import type { Arbitrary, SpacingVariants, WithVariants } from "../core";
import type { ContentSizeVariants, DynamicHeightVariants } from "./common";

type MaxHeightVariants =
  | SpacingVariants
  | "none"
  | "full"
  | "screen"
  | ContentSizeVariants
  | DynamicHeightVariants
  | Arbitrary;

/**
 * The `Max-Height` tailwindcss classes.
 * @see https://tailwindcss.com/docs/max-height
 */
export type MaxHeight = WithVariants<"max-h", MaxHeightVariants>;

export interface WithMaxHeight {
  /**
   * The `Max-Height` tailwindcss classes.
   * @see https://tailwindcss.com/docs/max-height
   */
  maxHeight?: MaxHeight;
}
