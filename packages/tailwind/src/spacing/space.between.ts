import {
  Arbitrary,
  ExtractKeyWithNegativeVariants,
  SpacingVariants,
  WithNegative,
  WithVariants,
} from "..";

/**
 * Space Between
 * @see https://tailwindcss.com/docs/space
 */

type SpaceBetweenKeys = WithNegative<"space-x"> | WithNegative<"space-y">;

type SpaceBetweenVariants = SpacingVariants | "reverse" | Arbitrary;

type ExtractSpaceBetween<T extends SpaceBetweenKeys> =
  ExtractKeyWithNegativeVariants<SpaceBetweenKeys, T, SpaceBetweenVariants>;

export type SpaceX = ExtractSpaceBetween<"space-x">;

export type SpaceY = ExtractSpaceBetween<"space-y">;

export type SpaceBetween = WithVariants<SpaceBetweenKeys, SpaceBetweenVariants>;

export interface WithSpaceX {
  spaceX?: SpaceX;
}

export interface WithSpaceY {
  spaceY?: SpaceY;
}

export interface WithSpaceBetween {
  spaceBetween?: SpaceBetween;
}
