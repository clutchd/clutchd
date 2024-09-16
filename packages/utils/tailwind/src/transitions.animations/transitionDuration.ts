import type { WithVariants } from "../core";

type TransitionDurationVariants =
  | "0"
  | "75"
  | "100"
  | "150"
  | "200"
  | "300"
  | "500"
  | "700"
  | "1000";

/**
 * The `Transition Duration` tailwindcss classes.
 * @see https://tailwindcss.com/docs/transition-duration
 */
export type TransitionDuration = WithVariants<
  "transition-duration",
  TransitionDurationVariants
>;

export interface WithTransitionDuration {
  /**
   * The `Transition Duration` tailwindcss classes.
   * @see https://tailwindcss.com/docs/transition-duration
   */
  transitionDuration?: TransitionDuration;
}
