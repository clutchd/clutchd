import { WithVariants } from "..";

/**
 * Align Items
 * @see https://tailwindcss.com/docs/align-items
 */

type AlignItemsVariants = "start" | "end" | "center" | "baseline" | "stretch";

export type AlignItems = WithVariants<"items", AlignItemsVariants>;

export interface WithAlignItems {
  alignItems?: AlignItems;
}
