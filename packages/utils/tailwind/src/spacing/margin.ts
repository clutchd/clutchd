import { ExtractKeyWithVariants, SpacingVariants } from "../core";

type MarginKeys = "m" | "mx" | "my" | "mt" | "mr" | "mb" | "ml" | "ms" | "me";

type MarginVariants = SpacingVariants | "auto";

type ExtractMargin<T extends MarginKeys> = ExtractKeyWithVariants<
  MarginKeys,
  T,
  MarginVariants
>;

/**
 * The `m` tailwindcss classes, a subset of the `Margin` classes.
 * @see https://tailwindcss.com/docs/margin
 */
export type Margin = ExtractMargin<"m">;

export interface WithMargin {
  /**
   * The `m` tailwindcss classes, a subset of the `Margin` classes.
   * @see https://tailwindcss.com/docs/margin
   */
  margin?: Margin;
}

/**
 * The `mx` tailwindcss classes, a subset of the `Margin` classes.
 * @see https://tailwindcss.com/docs/margin
 */
export type MarginX = ExtractMargin<"mx">;

export interface WithMarginX {
  /**
   * The `mx` tailwindcss classes, a subset of the `Margin` classes.
   * @see https://tailwindcss.com/docs/margin
   */
  marginX?: MarginX;
}

/**
 * The `my` tailwindcss classes, a subset of the `Margin` classes.
 * @see https://tailwindcss.com/docs/margin
 */
export type MarginY = ExtractMargin<"my">;

export interface WithMarginY {
  /**
   * The `my` tailwindcss classes, a subset of the `Margin` classes.
   * @see https://tailwindcss.com/docs/margin
   */
  marginY?: MarginY;
}

/**
 * The `mt` tailwindcss classes, a subset of the `Margin` classes.
 * @see https://tailwindcss.com/docs/margin
 */
export type MarginT = ExtractMargin<"mt">;

export interface WithMarginT {
  /**
   * The `mt` tailwindcss classes, a subset of the `Margin` classes.
   * @see https://tailwindcss.com/docs/margin
   */
  marginT?: MarginT;
}

/**
 * The `mr` tailwindcss classes, a subset of the `Margin` classes.
 * @see https://tailwindcss.com/docs/margin
 */
export type MarginR = ExtractMargin<"mr">;

export interface WithMarginR {
  /**
   * The `mr` tailwindcss classes, a subset of the `Margin` classes.
   * @see https://tailwindcss.com/docs/margin
   */
  marginR?: MarginR;
}

/**
 * The `mb` tailwindcss classes, a subset of the `Margin` classes.
 * @see https://tailwindcss.com/docs/margin
 */
export type MarginB = ExtractMargin<"mb">;

export interface WithMarginB {
  /**
   * The `mb` tailwindcss classes, a subset of the `Margin` classes.
   * @see https://tailwindcss.com/docs/margin
   */
  marginB?: MarginB;
}

/**
 * The `ml` tailwindcss classes, a subset of the `Margin` classes.
 * @see https://tailwindcss.com/docs/margin
 */
export type MarginL = ExtractMargin<"ml">;

export interface WithMarginL {
  /**
   * The `ml` tailwindcss classes, a subset of the `Margin` classes.
   * @see https://tailwindcss.com/docs/margin
   */
  marginL?: MarginL;
}

/**
 * The `ms` tailwindcss classes, a subset of the `Margin` classes.
 * @see https://tailwindcss.com/docs/margin
 */
export type MarginS = ExtractMargin<"ms">;

export interface WithMarginS {
  /**
   * The `ms` tailwindcss classes, a subset of the `Margin` classes.
   * @see https://tailwindcss.com/docs/margin
   */
  marginS?: MarginS;
}

/**
 * The `me` tailwindcss classes, a subset of the `Margin` classes.
 * @see https://tailwindcss.com/docs/margin
 */
export type MarginE = ExtractMargin<"me">;

export interface WithMarginE {
  /**
   * The `me` tailwindcss classes, a subset of the `Margin` classes.
   * @see https://tailwindcss.com/docs/margin
   */
  marginE?: MarginE;
}
