import { Arbitrary, WithOptionalVariants } from "..";

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
  | "rounded-br";

type BorderRadiusVariants =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "full"
  | Arbitrary;

export type BorderRadius = WithOptionalVariants<
  BorderRadiusKeys,
  BorderRadiusVariants
>;

export interface WithBorderRadius {
  borderRadius?: BorderRadius;
}
