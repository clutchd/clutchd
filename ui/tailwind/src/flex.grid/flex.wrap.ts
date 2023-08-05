import { WithVariants } from "../core";

/**
 * Flex Wrap
 * @see https://tailwindcss.com/docs/flex-wrap
 */

type FlexWrapVariants = "wrap" | "wrap-reverse" | "nowrap";

export type FlexWrap = WithVariants<"flex", FlexWrapVariants>;

export interface WithFlexWrap {
  flexWrap?: FlexWrap;
}
