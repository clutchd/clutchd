import { ColorAccent, ColorMap, ColorVariants, Opacity } from "..";

/**
 * Colors
 * @see https://tailwindcss.com/docs/customizing-colors
 */

export type StaticColor =
  | "inherit"
  | "current"
  | "transparent"
  | "black"
  | "white";

export type PaletteColor =
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone"
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

export function getColor(
  map: ColorMap<ColorVariants>,
  color: Color,
  accent: ColorAccent = "500"
) {
  switch (color) {
    case "none":
      return "";
    case "inherit":
    case "current":
    case "transparent":
    case "black":
    case "white":
      return map[color];

    default:
      return map[`${color}-${accent}`];
  }
}

export interface WithColor {
  theme?: Color;
}
