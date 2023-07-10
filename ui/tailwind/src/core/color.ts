import { ColorAccent, Opacity } from ".";

/**
 * Colors
 * @see https://tailwindcss.com/docs/customizing-colors
 */

type StaticColor = "inherit" | "current" | "transparent" | "black" | "white";

type GrayColor = "slate" | "gray" | "zinc" | "neutral" | "stone";

type PaletteColor =
  | GrayColor
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose";

export type Color = "none" | StaticColor | PaletteColor;

export type ColorWithAccent = `${PaletteColor}-${ColorAccent}`;

export type ColorWithOpacity = `${ColorWithAccent | StaticColor}/${Opacity}`;
