import { WithOptVariants } from "../core";

/**
 * Flex Shrink
 * @see https://tailwindcss.com/docs/flex-shrink
 */

type FlexShrinkVariants = "0";

export type FlexShrink = WithOptVariants<"shrink", FlexShrinkVariants>;

export interface WithFlexShrink {
  flexShrink?: FlexShrink;
}
