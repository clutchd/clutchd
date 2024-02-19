import { Arbitrary, Twelfths, WithVariants } from "../core";
import { CommonSizeVariants } from "./common";

type WidthVariants = CommonSizeVariants | "screen" | Twelfths | Arbitrary;

/**
 * The `Width` tailwindcss classes.
 * @see https://tailwindcss.com/docs/width
 */
export type Width = WithVariants<"w", WidthVariants>;

export interface WithWidth {
  /**
   * The `Width` tailwindcss classes.
   * @see https://tailwindcss.com/docs/width
   */
  width?: Width;
}
