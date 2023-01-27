import { WithVariants, ScreenVariants } from "..";

/**
 * Max-Width
 * @see https://tailwindcss.com/docs/max-width
 */

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
  | "min"
  | "max"
  | "fit"
  | "prose"
  | WithVariants<"screen", ScreenVariants>;

export type MaxWidth = WithVariants<"max-w", MaxWidthVariants>;

export interface WithMaxWidth {
  maxWidth?: MaxWidth;
}
