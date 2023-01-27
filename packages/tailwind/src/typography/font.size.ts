import { WithVariants } from "..";

/**
 * Font Size
 * @see https://tailwindcss.com/docs/font-size
 */

type FontSizeVariants =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl";

export type FontSize = WithVariants<"text", FontSizeVariants>;

export interface WithFontSize {
  fontSize?: FontSize;
}
