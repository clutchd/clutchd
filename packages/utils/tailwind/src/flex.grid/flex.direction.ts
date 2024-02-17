import { WithVariants } from "../core";

type FlexDirectionVariants = "row" | "row-reverse" | "col" | "col-reverse";

/**
 * The `Flex Direction` tailwindcss classes
 * @see https://tailwindcss.com/docs/flex-direction
 */
export type FlexDirection = WithVariants<"flex", FlexDirectionVariants>;

export interface WithFlexDirection {
  /**
   * The `Flex Direction` tailwindcss classes
   * @see https://tailwindcss.com/docs/flex-direction
   */
  flexDirection?: FlexDirection;
}
