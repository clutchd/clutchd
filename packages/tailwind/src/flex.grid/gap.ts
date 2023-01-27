import {
  Arbitrary,
  ExtractKeyWithNegativeVariants,
  SpacingVariants,
  WithVariants,
} from "..";

/**
 * Gap
 * @see https://tailwindcss.com/docs/gap
 */

type GapKeys = "gap" | "gap-x" | "gap-y";

type GapVariants = SpacingVariants | Arbitrary;

type ExtractGap<T extends GapKeys> = ExtractKeyWithNegativeVariants<
  GapKeys,
  T,
  GapVariants
>;

export type GapX = ExtractGap<"gap-x">;

export type GapY = ExtractGap<"gap-y">;

export type Gap = WithVariants<GapKeys, GapVariants>;

export interface WithGapX {
  gapX?: GapX;
}

export interface WithGapY {
  gapY?: GapY;
}

export interface WithGap {
  gap?: Gap;
}
