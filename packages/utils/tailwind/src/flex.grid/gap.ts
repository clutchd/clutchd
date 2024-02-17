import { SpacingVariants, WithVariants } from "../core";

/**
 * The `gap` tailwindcss classes, a subset of the `Gap` classes
 * @see https://tailwindcss.com/docs/gap
 */
export type Gap = WithVariants<"gap", SpacingVariants>;

export interface WithGap {
  /**
   * The `gap` tailwindcss classes, a subset of the `Gap` classes
   * @see https://tailwindcss.com/docs/gap
   */
  gap?: Gap;
}

/**
 * The `gap-x` tailwindcss classes, a subset of the `Gap` classes
 * @see https://tailwindcss.com/docs/gap
 */
export type GapX = WithVariants<"gap-x", SpacingVariants>;

export interface WithGapX {
  /**
   * The `gap-x` tailwindcss classes, a subset of the `Gap` classes
   * @see https://tailwindcss.com/docs/gap
   */
  gapX?: GapX;
}

/**
 * The `gap-y` tailwindcss classes, a subset of the `Gap` classes
 * @see https://tailwindcss.com/docs/gap
 */
export type GapY = WithVariants<"gap-y", SpacingVariants>;

export interface WithGapY {
  /**
   * The `gap-y` tailwindcss classes, a subset of the `Gap` classes
   * @see https://tailwindcss.com/docs/gap
   */
  gapY?: GapY;
}
