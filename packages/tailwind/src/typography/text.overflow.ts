import type { WithVariants } from "../core";

type TextOverflowVariants = "ellipsis" | "clip";

/**
 * The `Text Overflow` tailwindcss classes.
 * @see https://tailwindcss.com/docs/text-overflow
 */
export type TextOverflow =
  | "truncate"
  | WithVariants<"text", TextOverflowVariants>;

export interface WithTextOverflow {
  /**
   * The `Text Overflow` tailwindcss classes.
   * @see https://tailwindcss.com/docs/text-overflow
   */
  textOverflow?: TextOverflow;
}
