import { Arbitrary, WithOptionalVariants } from "..";

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

type BorderWidthVariants = "0" | "2" | "4" | "8" | Arbitrary;

export type BorderWidth = WithOptionalVariants<
  BorderWidthKeys,
  BorderWidthVariants
>;

export interface WithBorderWidth {
  borderWidth?: BorderWidth;
}
