import { WithVariants } from "../core";

/**
 * Flex
 * @see https://tailwindcss.com/docs/flex
 */

type FlexVariants = "1" | "auto" | "initial" | "none";

export type Flex = WithVariants<"flex", FlexVariants>;

export interface WithFlex {
  flex?: Flex;
}
