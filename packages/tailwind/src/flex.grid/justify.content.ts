import type { WithVariants } from "../core";
import type { ContentVariants } from "./common";

/**
 * The `Justify Content` tailwindcss classes.
 * @see https://tailwindcss.com/docs/justify-content
 */
export type JustifyContent = WithVariants<"justify", ContentVariants>;

export interface WithJustifyContent {
  /**
   * The `Justify Content` tailwindcss classes.
   * @see https://tailwindcss.com/docs/justify-content
   */
  justifyContent?: JustifyContent;
}
