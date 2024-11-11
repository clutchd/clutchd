import type { WithVariants } from "../core";

type LineHeightVariants =
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "none"
  | "tight"
  | "snug"
  | "normal"
  | "relaxed"
  | "loose";

/**
 * The `Line Height` tailwindcss classes.
 * @see https://tailwindcss.com/docs/line-height
 */
export type LineHeight = WithVariants<"leading", LineHeightVariants>;

export interface WithLineHeight {
  /**
   * The `Line Height` tailwindcss classes.
   * @see https://tailwindcss.com/docs/line-height
   */
  lineHeight?: LineHeight;
}
