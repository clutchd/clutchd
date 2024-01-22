import { Arbitrary, WithVariants } from "../core";
import { CommonSizeVariants, DynamicHeightVariants } from "./common";

/**
 * Height
 * @see https://tailwindcss.com/docs/height
 */

type HeightVariants = CommonSizeVariants | DynamicHeightVariants | Arbitrary;

export type Height = WithVariants<"h", HeightVariants>;

export interface WithHeight {
  height?: Height;
}
