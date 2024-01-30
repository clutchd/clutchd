import { Arbitrary, Twelfths, WithVariants } from "../core";
import { CommonSizeVariants } from "./common";

/**
 * Width
 * @see https://tailwindcss.com/docs/width
 */

type WidthVariants = CommonSizeVariants | "screen" | Twelfths | Arbitrary;

export type Width = WithVariants<"w", WidthVariants>;

export interface WithWidth {
  width?: Width;
}
