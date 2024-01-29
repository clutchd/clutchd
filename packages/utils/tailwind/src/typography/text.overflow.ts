import { WithVariants } from "../core";

/**
 * Text Overflow
 * @see https://tailwindcss.com/docs/text-overflow
 */

type TextOverflowVariants = "ellipsis" | "clip";

export type TextOverflow =
  | "truncate"
  | WithVariants<"text", TextOverflowVariants>;

export interface WithTextOverflow {
  textOverflow?: TextOverflow;
}
