import { WithVariants } from "../core";
import { StartEndCenter } from "./common";

type AlignItemsVariants = StartEndCenter | "baseline" | "stretch";

/**
 * The `Align Items` tailwindcss classes
 * @see https://tailwindcss.com/docs/align-items
 */
export type AlignItems = WithVariants<"items", AlignItemsVariants>;

export interface WithAlignItems {
  /**
   * The `Align Items` tailwindcss classes
   * @see https://tailwindcss.com/docs/align-items
   */
  alignItems?: AlignItems;
}
