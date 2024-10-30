import type { ExtractKeyWithOptVariants } from "../core";

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

/**
 * The `rounded` tailwindcss classes, a subset of the `Border Radius` classes.
 * @see https://tailwindcss.com/docs/border-radius
 */
export type BorderRadius = ExtractBorderRadius<"rounded">;

export interface WithBorderRadius {
  /**
   * The `rounded` tailwindcss classes, a subset of the `Border Radius` classes.
   * @see https://tailwindcss.com/docs/border-radius
   */
  borderRadius?: BorderRadius;
}

/**
 * The `rounded-t` tailwindcss classes, a subset of the `Border Radius` classes.
 * @see https://tailwindcss.com/docs/border-radius
 */
export type BorderRadiusT = ExtractBorderRadius<"rounded-t">;

export interface WithBorderRadiusT {
  /**
   * The `rounded-t` tailwindcss classes, a subset of the `Border Radius` classes.
   * @see https://tailwindcss.com/docs/border-radius
   */
  borderRadiusT?: BorderRadiusT;
}

/**
 * The `rounded-r` tailwindcss classes, a subset of the `Border Radius` classes.
 * @see https://tailwindcss.com/docs/border-radius
 */
export type BorderRadiusR = ExtractBorderRadius<"rounded-r">;

export interface WithBorderRadiusR {
  /**
   * The `rounded-r` tailwindcss classes, a subset of the `Border Radius` classes.
   * @see https://tailwindcss.com/docs/border-radius
   */
  borderRadiusR?: BorderRadiusR;
}

/**
 * The `rounded-b` tailwindcss classes, a subset of the `Border Radius` classes.
 * @see https://tailwindcss.com/docs/border-radius
 */
export type BorderRadiusB = ExtractBorderRadius<"rounded-b">;

export interface WithBorderRadiusB {
  /**
   * The `rounded-b` tailwindcss classes, a subset of the `Border Radius` classes.
   * @see https://tailwindcss.com/docs/border-radius
   */
  borderRadiusB?: BorderRadiusB;
}

/**
 * The `rounded-l` tailwindcss classes, a subset of the `Border Radius` classes.
 * @see https://tailwindcss.com/docs/border-radius
 */
export type BorderRadiusL = ExtractBorderRadius<"rounded-l">;

export interface WithBorderRadiusL {
  /**
   * The `rounded-l` tailwindcss classes, a subset of the `Border Radius` classes.
   * @see https://tailwindcss.com/docs/border-radius
   */
  borderRadiusL?: BorderRadiusL;
}

/**
 * The `rounded-tl` tailwindcss classes, a subset of the `Border Radius` classes.
 * @see https://tailwindcss.com/docs/border-radius
 */
export type BorderRadiusTL = ExtractBorderRadius<"rounded-tl">;

export interface WithBorderRadiusTL {
  /**
   * The `rounded-tl` tailwindcss classes, a subset of the `Border Radius` classes.
   * @see https://tailwindcss.com/docs/border-radius
   */
  borderRadiusTL?: BorderRadiusTL;
}

/**
 * The `rounded-tr` tailwindcss classes, a subset of the `Border Radius` classes.
 * @see https://tailwindcss.com/docs/border-radius
 */
export type BorderRadiusTR = ExtractBorderRadius<"rounded-tr">;

export interface WithBorderRadiusTR {
  /**
   * The `rounded-tr` tailwindcss classes, a subset of the `Border Radius` classes.
   * @see https://tailwindcss.com/docs/border-radius
   */
  borderRadiusTR?: BorderRadiusTR;
}

/**
 * The `rounded-bl` tailwindcss classes, a subset of the `Border Radius` classes.
 * @see https://tailwindcss.com/docs/border-radius
 */
export type BorderRadiusBL = ExtractBorderRadius<"rounded-bl">;

/**
 * The `rounded-bl` tailwindcss classes, a subset of the `Border Radius` classes.
 * @see https://tailwindcss.com/docs/border-radius
 */
export interface WithBorderRadiusBL {
  borderRadiusBL?: BorderRadiusBL;
}

/**
 * The `rounded-br` tailwindcss classes, a subset of the `Border Radius` classes.
 * @see https://tailwindcss.com/docs/border-radius
 */
export type BorderRadiusBR = ExtractBorderRadius<"rounded-br">;

export interface WithBorderRadiusBR {
  /**
   * The `rounded-br` tailwindcss classes, a subset of the `Border Radius` classes.
   * @see https://tailwindcss.com/docs/border-radius
   */
  borderRadiusBR?: BorderRadiusBR;
}

/**
 * The `rounded-s` tailwindcss classes, a subset of the `Border Radius` classes.
 * @see https://tailwindcss.com/docs/border-radius
 */
export type BorderRadiusS = ExtractBorderRadius<"rounded-s">;

export interface WithBorderRadiusS {
  /**
   * The `rounded-s` tailwindcss classes, a subset of the `Border Radius` classes.
   * @see https://tailwindcss.com/docs/border-radius
   */
  borderRadiusS?: BorderRadiusS;
}

/**
 * The `rounded-e` tailwindcss classes, a subset of the `Border Radius` classes.
 * @see https://tailwindcss.com/docs/border-radius
 */
export type BorderRadiusE = ExtractBorderRadius<"rounded-e">;

export interface WithBorderRadiusE {
  /**
   * The `rounded-e` tailwindcss classes, a subset of the `Border Radius` classes.
   * @see https://tailwindcss.com/docs/border-radius
   */
  borderRadiusE?: BorderRadiusE;
}

/**
 * The `rounded-ss` tailwindcss classes, a subset of the `Border Radius` classes.
 * @see https://tailwindcss.com/docs/border-radius
 */
export type BorderRadiusSS = ExtractBorderRadius<"rounded-ss">;

export interface WithBorderRadiusSS {
  /**
   * The `rounded-ss` tailwindcss classes, a subset of the `Border Radius` classes.
   * @see https://tailwindcss.com/docs/border-radius
   */
  borderRadiusSS?: BorderRadiusSS;
}

/**
 * The `rounded-se` tailwindcss classes, a subset of the `Border Radius` classes.
 * @see https://tailwindcss.com/docs/border-radius
 */
export type BorderRadiusSE = ExtractBorderRadius<"rounded-se">;

export interface WithBorderRadiusSE {
  /**
   * The `rounded-se` tailwindcss classes, a subset of the `Border Radius` classes.
   * @see https://tailwindcss.com/docs/border-radius
   */
  borderRadiusSE?: BorderRadiusSE;
}

/**
 * The `rounded-es` tailwindcss classes, a subset of the `Border Radius` classes.
 * @see https://tailwindcss.com/docs/border-radius
 */
export type BorderRadiusES = ExtractBorderRadius<"rounded-es">;

export interface WithBorderRadiusES {
  /**
   * The `rounded-es` tailwindcss classes, a subset of the `Border Radius` classes.
   * @see https://tailwindcss.com/docs/border-radius
   */
  borderRadiusES?: BorderRadiusES;
}

/**
 * The `rounded-ee` tailwindcss classes, a subset of the `Border Radius` classes.
 * @see https://tailwindcss.com/docs/border-radius
 */
export type BorderRadiusEE = ExtractBorderRadius<"rounded-ee">;

export interface WithBorderRadiusEE {
  /**
   * The `rounded-ee` tailwindcss classes, a subset of the `Border Radius` classes.
   * @see https://tailwindcss.com/docs/border-radius
   */
  borderRadiusEE?: BorderRadiusEE;
}
