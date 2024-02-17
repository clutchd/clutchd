import { WithVariants } from "../core";

type TransitionTimingVariants = "linear" | "in" | "out" | "in-out";

/**
 * The `Transition Timing Function` tailwindcss classes
 * @see https://tailwindcss.com/docs/transition-timing-function
 */
export type TransitionTiming = WithVariants<"ease", TransitionTimingVariants>;

export interface WithTransitionTiming {
  /**
   * The `Transition Timing Function` tailwindcss classes
   * @see https://tailwindcss.com/docs/transition-timing-function
   */
  transitionTiming?: TransitionTiming;
}
