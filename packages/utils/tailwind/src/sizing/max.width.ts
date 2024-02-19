import { Arbitrary, ScreenVariants, WithVariants } from "../core";
import { ContentSizeVariants } from "./common";

type MaxWidthVariants =
  | "0"
  | "none"
  | "xs"
  | ScreenVariants
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "full"
  | ContentSizeVariants
  | "prose"
  | WithVariants<"screen", ScreenVariants>
  | Arbitrary;

/**
 * The `Max-Width` tailwindcss classes.
 * @see https://tailwindcss.com/docs/max-width
 */
export type MaxWidth = WithVariants<"max-w", MaxWidthVariants>;

export interface WithMaxWidth {
  /**
   * The `Max-Width` tailwindcss classes.
   * @see https://tailwindcss.com/docs/max-width
   */
  maxWidth?: MaxWidth;
}
