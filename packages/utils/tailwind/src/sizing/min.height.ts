import { Arbitrary, SpacingVariants, WithVariants } from "../core";
import { ContentSizeVariants, DynamicHeightVariants } from "./common";

/**
 * Min-Height
 * @see https://tailwindcss.com/docs/min-height
 */

type MinHeightVariants =
  | SpacingVariants
  | "full"
  | "screen"
  | ContentSizeVariants
  | DynamicHeightVariants
  | Arbitrary;

export type MinHeight = WithVariants<"min-h", MinHeightVariants>;

export interface WithMinHeight {
  minHeight?: MinHeight;
}
