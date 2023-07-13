import { WithVariants } from "../core";

/**
 * Line Height
 * @see https://tailwindcss.com/docs/line-height
 */

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

export type LineHeight = WithVariants<"leading", LineHeightVariants>;

export interface WithLineHeight {
  lineHeight?: LineHeight;
}
