import { Arbitrary, SpacingVariants, WithVariants } from "../core";
import { ContentSizeVariants, DynamicHeightVariants } from "./common";

/**
 * Max-Height
 * @see https://tailwindcss.com/docs/max-height
 */

type MaxHeightVariants =
  | SpacingVariants
  | "none"
  | "full"
  | "screen"
  | ContentSizeVariants
  | DynamicHeightVariants
  | Arbitrary;

export type MaxHeight = WithVariants<"max-h", MaxHeightVariants>;

export interface WithMaxHeight {
  maxHeight?: MaxHeight;
}
