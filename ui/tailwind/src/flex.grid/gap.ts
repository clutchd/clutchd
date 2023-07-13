import { SpacingVariants, WithVariants } from "../core";

/**
 * Gap
 * @see https://tailwindcss.com/docs/gap
 */

export type GapX = WithVariants<"gap-x", SpacingVariants>;

export type GapY = WithVariants<"gap-y", SpacingVariants>;

export type Gap = WithVariants<"gap", SpacingVariants>;

export interface WithGapX {
  gapX?: GapX;
}

export interface WithGapY {
  gapY?: GapY;
}

export interface WithGap {
  gap?: Gap;
}
