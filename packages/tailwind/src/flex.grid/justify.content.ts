import { WithVariants } from "../core";
import { ContentVariants } from "./common";

/**
 * Justify Content
 * @see https://tailwindcss.com/docs/justify-content
 */

export type JustifyContent = WithVariants<"justify", ContentVariants>;

export interface WithJustifyContent {
  justifyContent?: JustifyContent;
}
