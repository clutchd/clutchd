import { WithVariants } from "../core";

/**
 * Transition Duration
 * @see https://tailwindcss.com/docs/transition-duration
 */

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

export type TransitionDuration = WithVariants<
  "transition-duration",
  TransitionDurationVariants
>;

export interface WithTransitionDuration {
  transitionDuration?: TransitionDuration;
}
