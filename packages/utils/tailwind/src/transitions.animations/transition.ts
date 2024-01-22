import { WithOptVariants } from "../core";

/**
 * Transition
 * @see https://tailwindcss.com/docs/transition-property
 */

type TransitionVariants =
  | "none"
  | "all"
  | "colors"
  | "opacity"
  | "shadow"
  | "transform";

export type Transition = WithOptVariants<"transition", TransitionVariants>;

export interface WithTransition {
  transition?: Transition;
}
