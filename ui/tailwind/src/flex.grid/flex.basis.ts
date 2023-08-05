import { Arbitrary, Fractions, SpacingVariants, WithVariants } from "../core";

/**
 * Flex Grow
 * @see https://tailwindcss.com/docs/flex-grow
 */

type FlexBasisVariants =
  | SpacingVariants
  | Fractions
  | "auto"
  | "full"
  | Arbitrary;

export type FlexBasis = WithVariants<"basis", FlexBasisVariants>;

export interface WithFlexBasis {
  flexBasis?: FlexBasis;
}
