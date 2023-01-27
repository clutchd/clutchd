import { WithVariants } from "..";

/**
 * Justify Content
 * @see https://tailwindcss.com/docs/justify-content
 */

type JustifyContentVariants =
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly";

export type JustifyContent = WithVariants<"justify", JustifyContentVariants>;

export interface WithJustifyContent {
  justifyContent?: JustifyContent;
}
