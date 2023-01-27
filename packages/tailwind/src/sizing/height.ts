import { Arbitrary, SpacingVariants, WithVariants } from "..";

/**
 * Height
 * @see https://tailwindcss.com/docs/height
 */

type HeightVariants =
  | SpacingVariants
  | "auto"
  | "1/2"
  | "1/3"
  | "2/3"
  | "1/4"
  | "2/4"
  | "3/4"
  | "1/5"
  | "2/5"
  | "3/5"
  | "4/5"
  | "1/6"
  | "2/6"
  | "3/6"
  | "4/6"
  | "5/6"
  | "full"
  | "screen"
  | "min"
  | "max"
  | "fit"
  | Arbitrary;

export type Height = WithVariants<"h", HeightVariants>;

export interface WithHeight {
  height?: Height;
}
