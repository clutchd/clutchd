import { WithVariants } from "../core";

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

/**
 * The `Font Size` tailwindcss classes
 * @see https://tailwindcss.com/docs/font-size
 */
export type FontSize = WithVariants<"text", FontSizeVariants>;

export interface WithFontSize {
  /**
   * The `Font Size` tailwindcss classes
   * @see https://tailwindcss.com/docs/font-size
   */
  fontSize?: FontSize;
}
