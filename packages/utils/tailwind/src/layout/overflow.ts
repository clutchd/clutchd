import { WithVariants } from "../core";

type OverflowVariants = "auto" | "hidden" | "clip" | "visible" | "scroll";

/**
 * The `overflow` tailwindcss classes, a subset of the `Overflow` classes.
 * @see https://tailwindcss.com/docs/overflow
 */
export type Overflow = WithVariants<"overflow", OverflowVariants>;

export interface WithOverflow {
  /**
   * The `overflow` tailwindcss classes, a subset of the `Overflow` classes.
   * @see https://tailwindcss.com/docs/overflow
   */
  overflow?: Overflow;
}

/**
 * The `overflow-x` tailwindcss classes, a subset of the `Overflow` classes.
 * @see https://tailwindcss.com/docs/overflow
 */
export type OverflowX = WithVariants<"overflow-x", OverflowVariants>;

export interface WithOverflowX {
  /**
   * The `overflow-x` tailwindcss classes, a subset of the `Overflow` classes.
   * @see https://tailwindcss.com/docs/overflow
   */
  overflowX?: OverflowX;
}

/**
 * The `overflow-y` tailwindcss classes, a subset of the `Overflow` classes.
 * @see https://tailwindcss.com/docs/overflow
 */
export type OverflowY = WithVariants<"overflow-y", OverflowVariants>;

export interface WithOverflowY {
  /**
   * The `overflow-y` tailwindcss classes, a subset of the `Overflow` classes.
   * @see https://tailwindcss.com/docs/overflow
   */
  overflowY?: OverflowY;
}
