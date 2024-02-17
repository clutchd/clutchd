import { WithVariants } from "../core";

type FlexVariants = "1" | "auto" | "initial" | "none";

/**
 * The `Flex` tailwindcss classes
 * @see https://tailwindcss.com/docs/flex
 */
export type Flex = WithVariants<"flex", FlexVariants>;

export interface WithFlex {
  /**
   * The `Flex` tailwindcss classes
   * @see https://tailwindcss.com/docs/flex
   */
  flex?: Flex;
}
