import type { WithVariants } from "../core";
import type { ContentVariants } from "./common";

type AlignContentVariants = ContentVariants | "baseline";

/**
 * The `Align Content` tailwindcss classes.
 * @see https://tailwindcss.com/docs/align-content
 */
export type AlignContent = WithVariants<"content", AlignContentVariants>;

export interface WithAlignContent {
  /**
   * The `Align Content` tailwindcss classes.
   * @see https://tailwindcss.com/docs/align-content
   */
  alignContent?: AlignContent;
}
