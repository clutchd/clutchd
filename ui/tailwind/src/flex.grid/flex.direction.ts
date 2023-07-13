import { WithVariants } from "../core";

/**
 * Flex Direction
 * @see https://tailwindcss.com/docs/flex-direction
 */

type FlexDirectionVariants = "row" | "row-reverse" | "col" | "col-reverse";

export type FlexDirection = WithVariants<"flex", FlexDirectionVariants>;

export interface WithFlexDirection {
  flexDirection?: FlexDirection;
}
