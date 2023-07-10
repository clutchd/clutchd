import { Arbitrary, WithVariants } from "../core";
import { CommonSizeVariants } from "./common";

/**
 * Height
 * @see https://tailwindcss.com/docs/height
 */

type HeightVariants = CommonSizeVariants | Arbitrary;

export type Height = WithVariants<"h", HeightVariants>;

export interface WithHeight {
  height?: Height;
}
