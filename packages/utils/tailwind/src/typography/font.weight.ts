import { WithVariants } from "../core";

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

/**
 * The `Font Weight` tailwindcss classes.
 * @see https://tailwindcss.com/docs/font-weight
 */
export type FontWeight = WithVariants<"font", FontWeightVariants>;

export interface WithFontWeight {
  /**
   * The `Font Weight` tailwindcss classes.
   * @see https://tailwindcss.com/docs/font-weight
   */
  fontWeight?: FontWeight;
}
