import {
  Arbitrary,
  ExtractKeyWithNegativeVariants,
  SpacingVariants,
  WithNegative,
  WithVariants,
} from "..";

/**
 * Margin
 * @see https://tailwindcss.com/docs/margin
 */

type MarginKeys =
  | WithNegative<"m">
  | WithNegative<"mx">
  | WithNegative<"my">
  | WithNegative<"mt">
  | WithNegative<"mr">
  | WithNegative<"mb">
  | WithNegative<"ml">;

type MarginVariants = SpacingVariants | "auto" | Arbitrary;

type ExtractMargin<T extends MarginKeys> = ExtractKeyWithNegativeVariants<
  MarginKeys,
  T,
  MarginVariants
>;

export type MarginX = ExtractMargin<"mx">;

export type MarginY = ExtractMargin<"my">;

export type MarginT = ExtractMargin<"mt">;

export type MarginR = ExtractMargin<"mr">;

export type MarginB = ExtractMargin<"mb">;

export type MarginL = ExtractMargin<"ml">;

export type Margin = WithVariants<MarginKeys, MarginVariants>;

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

export interface WithMargin {
  margin?: Margin;
}
