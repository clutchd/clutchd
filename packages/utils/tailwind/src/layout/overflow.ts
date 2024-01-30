import { WithVariants } from "../core";

/**
 * Overflow
 * @see https://tailwindcss.com/docs/overflow
 */

type CommonOverflowVariants = "auto" | "hidden" | "clip" | "visible" | "scroll";

type XVariants = WithVariants<"x", CommonOverflowVariants>;

type YVariants = WithVariants<"y", CommonOverflowVariants>;

export type Overflow = WithVariants<
  "overflow",
  CommonOverflowVariants | XVariants | YVariants
>;

export interface WithOverflow {
  overflow?: Overflow;
}
