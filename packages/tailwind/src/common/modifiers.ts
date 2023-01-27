import { Permutations, ScreenVariants } from "..";

/**
 * Modifier Values
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states
 */

export type Modifier = "hover" | "focus" | "dark" | ScreenVariants;

export type AnyModifiers = Permutations<Modifier, ":">;

export type WithModifier<
  Prefix extends Modifier,
  Value extends string
> = `${Prefix}:${Value}`;

// export type WithModifiers<Value extends string> = `${AnyModifiers}:${Value}`;
