import type { SpacingVariants, WithVariants } from "../core";

type SpaceBetweenVariants = SpacingVariants | "reverse";

/**
 * The `space-x` tailwindcss classes, a subset of the `Space Between` classes.
 * @see https://tailwindcss.com/docs/space
 */
export type SpaceX = WithVariants<"space-x", SpaceBetweenVariants>;

export interface WithSpaceX {
  /**
   * The `space-x` tailwindcss classes, a subset of the `Space Between` classes.
   * @see https://tailwindcss.com/docs/space
   */
  spaceX?: SpaceX;
}

/**
 * The `space-y` tailwindcss classes, a subset of the `Space Between` classes.
 * @see https://tailwindcss.com/docs/space
 */
export type SpaceY = WithVariants<"space-y", SpaceBetweenVariants>;

export interface WithSpaceY {
  /**
   * The `space-y` tailwindcss classes, a subset of the `Space Between` classes.
   * @see https://tailwindcss.com/docs/space
   */
  spaceY?: SpaceY;
}
