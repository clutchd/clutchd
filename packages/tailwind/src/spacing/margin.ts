import { ExtractKeyWithVariants, SpacingVariants } from "../core";

/**
 * Margin
 * @see https://tailwindcss.com/docs/margin
 */

type MarginKeys = "m" | "mx" | "my" | "mt" | "mr" | "mb" | "ml" | "ms" | "me";

type MarginVariants = SpacingVariants | "auto";

type ExtractMargin<T extends MarginKeys> = ExtractKeyWithVariants<
  MarginKeys,
  T,
  MarginVariants
>;

export type Margin = ExtractMargin<"m">;

export type MarginX = ExtractMargin<"mx">;

export type MarginY = ExtractMargin<"my">;

export type MarginT = ExtractMargin<"mt">;

export type MarginR = ExtractMargin<"mr">;

export type MarginB = ExtractMargin<"mb">;

export type MarginL = ExtractMargin<"ml">;

export type MarginS = ExtractMargin<"ms">;

export type MarginE = ExtractMargin<"me">;

export interface WithMargin {
  margin?: Margin;
}

export interface WithMarginX {
  marginX?: MarginX;
}

export interface WithMarginY {
  marginY?: MarginY;
}

export interface WithMarginT {
  marginT?: MarginT;
}

export interface WithMarginR {
  marginR?: MarginR;
}

export interface WithMarginB {
  marginB?: MarginB;
}

export interface WithMarginL {
  marginL?: MarginL;
}

export interface WithMarginS {
  marginS?: MarginS;
}

export interface WithMarginE {
  marginE?: MarginE;
}
