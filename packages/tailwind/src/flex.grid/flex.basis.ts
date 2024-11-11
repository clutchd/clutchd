import type {
  Arbitrary,
  Fractions,
  SpacingVariants,
  WithVariants,
} from "../core";

type FlexBasisVariants =
  | SpacingVariants
  | Fractions
  | "auto"
  | "full"
  | Arbitrary;

/**
 * The `Flex Basis` tailwindcss classes.
 * @see https://tailwindcss.com/docs/flex-basis
 */
export type FlexBasis = WithVariants<"basis", FlexBasisVariants>;

export interface WithFlexBasis {
  /**
   * The `Flex Basis` tailwindcss classes.
   * @see https://tailwindcss.com/docs/flex-basis
   */
  flexBasis?: FlexBasis;
}
