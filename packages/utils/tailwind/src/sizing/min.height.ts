import { Arbitrary, SpacingVariants, WithVariants } from "../core";
import { ContentSizeVariants, DynamicHeightVariants } from "./common";

type MinHeightVariants =
  | SpacingVariants
  | "full"
  | "screen"
  | ContentSizeVariants
  | DynamicHeightVariants
  | Arbitrary;

/**
 * The `Min-Height` tailwindcss classes
 * @see https://tailwindcss.com/docs/min-height
 */
export type MinHeight = WithVariants<"min-h", MinHeightVariants>;

export interface WithMinHeight {
  /**
   * The `Min-Height` tailwindcss classes
   * @see https://tailwindcss.com/docs/min-height
   */
  minHeight?: MinHeight;
}
