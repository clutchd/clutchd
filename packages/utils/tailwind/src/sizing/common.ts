import {
  Fifths,
  Fourths,
  Halves,
  Sixths,
  SpacingVariants,
  Thirds,
} from "../core";

export type ContentSizeVariants = "min" | "max" | "fit";

export type DynamicHeightVariants = "svh" | "lvh" | "dvh";

export type CommonSizeVariants =
  | SpacingVariants
  | "auto"
  | Halves
  | Thirds
  | Fourths
  | Fifths
  | Sixths
  | "full"
  | ContentSizeVariants;
