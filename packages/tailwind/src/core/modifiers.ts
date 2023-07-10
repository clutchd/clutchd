import { ScreenVariants } from "./";

/**
 * Modifier Values
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states
 */

export type Modifier = "hover" | "focus" | "dark" | ScreenVariants;

export type WithModifier<
  Prefix extends Modifier,
  Value extends string
> = `${Prefix}:${Value}`;
