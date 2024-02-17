import { WithOptVariants } from "../core";

type FlexShrinkVariants = "0";

/**
 * The `Flex Shrink` tailwindcss classes
 * @see https://tailwindcss.com/docs/flex-shrink
 */
export type FlexShrink = WithOptVariants<"shrink", FlexShrinkVariants>;

export interface WithFlexShrink {
  /**
   * The `Flex Shrink` tailwindcss classes
   * @see https://tailwindcss.com/docs/flex-shrink
   */
  flexShrink?: FlexShrink;
}
