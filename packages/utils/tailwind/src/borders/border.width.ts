import { ExtractKeyWithOptVariants } from "../core";

/**
 * Border Width
 * @see https://tailwindcss.com/docs/border-width
 */

type BorderWidthKeys =
  | "border"
  | "border-x"
  | "border-y"
  | "border-t"
  | "border-r"
  | "border-b"
  | "border-l";

type BorderWidthVariants = "0" | "2" | "4" | "8";

type ExtractBorderWidth<T extends BorderWidthKeys> = ExtractKeyWithOptVariants<
  BorderWidthKeys,
  T,
  BorderWidthVariants
>;

/**
 * The `border` tailwindcss classes, a subset of the `Border Width` classes
 * @see https://tailwindcss.com/docs/border-width
 */
export type BorderWidth = ExtractBorderWidth<"border">;

export interface WithBorderWidth {
  /**
   * The `border` tailwindcss classes, a subset of the `Border Width` classes
   * @see https://tailwindcss.com/docs/border-width
   */
  borderWidth?: BorderWidth;
}

/**
 * The `border-x` tailwindcss classes, a subset of the `Border Width` classes
 * @see https://tailwindcss.com/docs/border-width
 */
export type BorderWidthX = ExtractBorderWidth<"border-x">;

export interface WithBorderWidthX {
  /**
   * The `border-x` tailwindcss classes, a subset of the `Border Width` classes
   * @see https://tailwindcss.com/docs/border-width
   */
  borderWidthX?: BorderWidthX;
}

/**
 * The `border-y` tailwindcss classes, a subset of the `Border Width` classes
 * @see https://tailwindcss.com/docs/border-width
 */
export type BorderWidthY = ExtractBorderWidth<"border-y">;

export interface WithBorderWidthY {
  /**
   * The `border-y` tailwindcss classes, a subset of the `Border Width` classes
   * @see https://tailwindcss.com/docs/border-width
   */
  borderWidthY?: BorderWidthY;
}

/**
 * The `border-t` tailwindcss classes, a subset of the `Border Width` classes
 * @see https://tailwindcss.com/docs/border-width
 */
export type BorderWidthT = ExtractBorderWidth<"border-t">;

export interface WithBorderWidthT {
  /**
   * The `border-t` tailwindcss classes, a subset of the `Border Width` classes
   * @see https://tailwindcss.com/docs/border-width
   */
  borderWidthT?: BorderWidthT;
}

/**
 * The `border-r` tailwindcss classes, a subset of the `Border Width` classes
 * @see https://tailwindcss.com/docs/border-width
 */
export type BorderWidthR = ExtractBorderWidth<"border-r">;

export interface WithBorderWidthR {
  /**
   * The `border-r` tailwindcss classes, a subset of the `Border Width` classes
   * @see https://tailwindcss.com/docs/border-width
   */
  borderWidthR?: BorderWidthR;
}

/**
 * The `border-b` tailwindcss classes, a subset of the `Border Width` classes
 * @see https://tailwindcss.com/docs/border-width
 */
export type BorderWidthB = ExtractBorderWidth<"border-b">;

export interface WithBorderWidthB {
  /**
   * The `border-b` tailwindcss classes, a subset of the `Border Width` classes
   * @see https://tailwindcss.com/docs/border-width
   */
  borderWidthB?: BorderWidthB;
}

/**
 * The `border-l` tailwindcss classes, a subset of the `Border Width` classes
 * @see https://tailwindcss.com/docs/border-width
 */
export type BorderWidthL = ExtractBorderWidth<"border-l">;

export interface WithBorderWidthL {
  /**
   * The `border-l` tailwindcss classes, a subset of the `Border Width` classes
   * @see https://tailwindcss.com/docs/border-width
   */
  borderWidthL?: BorderWidthL;
}
