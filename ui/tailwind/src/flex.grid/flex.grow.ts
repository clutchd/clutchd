import { WithOptVariants } from "../core";

/**
 * Flex Grow
 * @see https://tailwindcss.com/docs/flex-grow
 */

type FlexGrowVariants = "0";

export type FlexGrow = WithOptVariants<"grow", FlexGrowVariants>;

export interface WithFlexGrow {
  flexGrow?: FlexGrow;
}
