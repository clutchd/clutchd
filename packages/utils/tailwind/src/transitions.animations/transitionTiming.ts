import { WithVariants } from "../core";

/**
 * Transition Timing Function
 * @see https://tailwindcss.com/docs/transition-timing-function
 */

type TransitionTimingVariants = "linear" | "in" | "out" | "in-out";

export type TransitionTiming = WithVariants<"ease", TransitionTimingVariants>;

export interface WithTransitionTiming {
  transitionTiming?: TransitionTiming;
}
