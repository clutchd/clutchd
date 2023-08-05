import { ScreenVariants, WithVariants } from "../core";
import { ContentSizeVariants } from "./common";

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
  | ContentSizeVariants
  | "prose"
  | WithVariants<"screen", ScreenVariants>;

export type MaxWidth = WithVariants<"max-w", MaxWidthVariants>;

export interface WithMaxWidth {
  maxWidth?: MaxWidth;
}
