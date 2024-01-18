import { ExtractKeyWithOptVariants } from "../core";

/**
 * Border Radius
 * @see https://tailwindcss.com/docs/border-radius
 */

type BorderRadiusKeys =
  | "rounded"
  | "rounded-t"
  | "rounded-r"
  | "rounded-b"
  | "rounded-l"
  | "rounded-tl"
  | "rounded-tr"
  | "rounded-bl"
  | "rounded-br"
  | "rounded-s"
  | "rounded-e"
  | "rounded-ss"
  | "rounded-se"
  | "rounded-es"
  | "rounded-ee";

type BorderRadiusVariants =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "full";

type ExtractBorderRadius<T extends BorderRadiusKeys> =
  ExtractKeyWithOptVariants<BorderRadiusKeys, T, BorderRadiusVariants>;

export type BorderRadius = ExtractBorderRadius<"rounded">;

export type BorderRadiusT = ExtractBorderRadius<"rounded-t">;

export type BorderRadiusR = ExtractBorderRadius<"rounded-r">;

export type BorderRadiusB = ExtractBorderRadius<"rounded-b">;

export type BorderRadiusL = ExtractBorderRadius<"rounded-l">;

export type BorderRadiusTL = ExtractBorderRadius<"rounded-tl">;

export type BorderRadiusTR = ExtractBorderRadius<"rounded-tr">;

export type BorderRadiusBL = ExtractBorderRadius<"rounded-bl">;

export type BorderRadiusBR = ExtractBorderRadius<"rounded-br">;

export type BorderRadiusS = ExtractBorderRadius<"rounded-s">;

export type BorderRadiusE = ExtractBorderRadius<"rounded-e">;

export type BorderRadiusSS = ExtractBorderRadius<"rounded-ss">;

export type BorderRadiusSE = ExtractBorderRadius<"rounded-se">;

export type BorderRadiusES = ExtractBorderRadius<"rounded-es">;

export type BorderRadiusEE = ExtractBorderRadius<"rounded-ee">;

export interface WithBorderRadius {
  borderRadius?: BorderRadius;
}

export interface WithBorderRadiusT {
  borderRadiusT?: BorderRadiusT;
}

export interface WithBorderRadiusR {
  borderRadiusR?: BorderRadiusR;
}

export interface WithBorderRadiusB {
  borderRadiusB?: BorderRadiusB;
}

export interface WithBorderRadiusL {
  borderRadiusL?: BorderRadiusL;
}

export interface WithBorderRadiusTL {
  borderRadiusTL?: BorderRadiusTL;
}

export interface WithBorderRadiusTR {
  borderRadiusTR?: BorderRadiusTR;
}

export interface WithBorderRadiusBL {
  borderRadiusBL?: BorderRadiusBL;
}

export interface WithBorderRadiusBR {
  borderRadiusBR?: BorderRadiusBR;
}

export interface WithBorderRadiusS {
  borderRadiusS?: BorderRadiusS;
}

export interface WithBorderRadiusE {
  borderRadiusE?: BorderRadiusE;
}

export interface WithBorderRadiusSS {
  borderRadiusSS?: BorderRadiusSS;
}

export interface WithBorderRadiusSE {
  borderRadiusSE?: BorderRadiusSE;
}

export interface WithBorderRadiusES {
  borderRadiusES?: BorderRadiusES;
}

export interface WithBorderRadiusEE {
  borderRadiusEE?: BorderRadiusEE;
}
