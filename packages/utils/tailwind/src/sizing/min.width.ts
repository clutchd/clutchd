import { Arbitrary, SpacingVariants, WithVariants } from "../core";
import { ContentSizeVariants } from "./common";

/**
 * Min-Width
 * @see https://tailwindcss.com/docs/min-width
 */

type MinWidthVariants =
  | SpacingVariants
  | "full"
  | ContentSizeVariants
  | Arbitrary;

export type MinWidth = WithVariants<"min-w", MinWidthVariants>;

export interface WithMinWidth {
  minWidth?: MinWidth;
}
