import { WithVariants } from "../core";
import { ContentVariants } from "./common";

/**
 * Align Content
 * @see https://tailwindcss.com/docs/align-content
 */

type AlignContentVariants = ContentVariants | "baseline";

export type AlignContent = WithVariants<"content", AlignContentVariants>;

export interface WithAlignContent {
  alignContent?: AlignContent;
}
