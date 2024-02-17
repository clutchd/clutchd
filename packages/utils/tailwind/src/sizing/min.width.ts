import { Arbitrary, SpacingVariants, WithVariants } from "../core";
import { ContentSizeVariants } from "./common";

type MinWidthVariants =
  | SpacingVariants
  | "full"
  | ContentSizeVariants
  | Arbitrary;

/**
 * The `Min-Width` tailwindcss classes
 * @see https://tailwindcss.com/docs/min-width
 */
export type MinWidth = WithVariants<"min-w", MinWidthVariants>;

export interface WithMinWidth {
  /**
   * The `Min-Width` tailwindcss classes
   * @see https://tailwindcss.com/docs/min-width
   */
  minWidth?: MinWidth;
}
