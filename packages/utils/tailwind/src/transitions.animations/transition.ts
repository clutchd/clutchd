import { WithOptVariants } from "../core";

type TransitionVariants =
  | "none"
  | "all"
  | "colors"
  | "opacity"
  | "shadow"
  | "transform";

/**
 * The `Transition` tailwindcss classes.
 * @see https://tailwindcss.com/docs/transition-property
 */
export type Transition = WithOptVariants<"transition", TransitionVariants>;

export interface WithTransition {
  /**
   * The `Transition` tailwindcss classes.
   * @see https://tailwindcss.com/docs/transition-property
   */
  transition?: Transition;
}
