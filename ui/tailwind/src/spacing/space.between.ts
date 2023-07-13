import { SpacingVariants, WithVariants } from "../core";

/**
 * Space Between
 * @see https://tailwindcss.com/docs/space
 */

type SpaceBetweenVariants = SpacingVariants | "reverse";

export type SpaceX = WithVariants<"space-x", SpaceBetweenVariants>;

export type SpaceY = WithVariants<"space-y", SpaceBetweenVariants>;

export type SpaceBetween = WithVariants<
  "space-x" | "space-y",
  SpaceBetweenVariants
>;

export interface WithSpaceX {
  spaceX?: SpaceX;
}

export interface WithSpaceY {
  spaceY?: SpaceY;
}

export interface WithSpaceBetween {
  spaceBetween?: SpaceBetween;
}
