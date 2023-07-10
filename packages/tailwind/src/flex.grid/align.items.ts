import { WithVariants } from "../core";
import { StartEndCenter } from "./common";

/**
 * Align Items
 * @see https://tailwindcss.com/docs/align-items
 */

type AlignItemsVariants = StartEndCenter | "baseline" | "stretch";

export type AlignItems = WithVariants<"items", AlignItemsVariants>;

export interface WithAlignItems {
  alignItems?: AlignItems;
}
