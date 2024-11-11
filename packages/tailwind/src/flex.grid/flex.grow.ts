import type { WithOptVariants } from "../core";

type FlexGrowVariants = "0";

/**
 * The `Flex Grow` tailwindcss classes.
 * @see https://tailwindcss.com/docs/flex-grow
 */
export type FlexGrow = WithOptVariants<"grow", FlexGrowVariants>;

export interface WithFlexGrow {
  /**
   * The `Flex Grow` tailwindcss classes.
   * @see https://tailwindcss.com/docs/flex-grow
   */
  flexGrow?: FlexGrow;
}
