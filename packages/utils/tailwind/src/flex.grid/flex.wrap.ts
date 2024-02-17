import { WithVariants } from "../core";

type FlexWrapVariants = "wrap" | "wrap-reverse" | "nowrap";

/**
 * The `Flex Wrap` tailwindcss classes
 * @see https://tailwindcss.com/docs/flex-wrap
 */
export type FlexWrap = WithVariants<"flex", FlexWrapVariants>;

export interface WithFlexWrap {
  /**
   * The `Flex Wrap` tailwindcss classes
   * @see https://tailwindcss.com/docs/flex-wrap
   */
  flexWrap?: FlexWrap;
}
