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

export type BorderWidth = ExtractBorderWidth<"border">;

export type BorderWidthX = ExtractBorderWidth<"border-x">;

export type BorderWidthY = ExtractBorderWidth<"border-y">;

export type BorderWidthT = ExtractBorderWidth<"border-t">;

export type BorderWidthR = ExtractBorderWidth<"border-r">;

export type BorderWidthB = ExtractBorderWidth<"border-b">;

export type BorderWidthL = ExtractBorderWidth<"border-l">;

export interface WithBorderWidth {
  borderWidth?: BorderWidth;
}

export interface WithBorderWidthX {
  borderWidthX?: BorderWidthX;
}

export interface WithBorderWidthY {
  borderWidthY?: BorderWidthY;
}

export interface WithBorderWidthT {
  borderWidthT?: BorderWidthT;
}

export interface WithBorderWidthR {
  borderWidthR?: BorderWidthR;
}

export interface WithBorderWidthB {
  borderWidthB?: BorderWidthB;
}

export interface WithBorderWidthL {
  borderWidthL?: BorderWidthL;
}
