import { Arbitrary, WithVariants } from "../core";
import { CommonSizeVariants, DynamicHeightVariants } from "./common";

/**
 * Size
 * @see https://tailwindcss.com/docs/size
 */

type SizeVariants = CommonSizeVariants | Arbitrary;

export type Size = WithVariants<"size", SizeVariants>;

export interface WithSize {
  size?: Size;
}
