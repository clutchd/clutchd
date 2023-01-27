import { WithVariants } from "..";

/**
 * Font Weight
 * @see https://tailwindcss.com/docs/font-weight
 */

type FontWeightVariants =
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";

export type FontWeight = WithVariants<"font", FontWeightVariants>;

export interface WithFontWeight {
  fontWeight?: FontWeight;
}
