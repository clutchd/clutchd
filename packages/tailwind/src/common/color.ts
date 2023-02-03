import { ColorAccent, Opacity } from "..";

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

export type GrayColor = "slate" | "gray" | "zinc" | "neutral" | "stone";

export type PaletteColor =
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

export interface WithGrayColor {
  theme?: "none" | GrayColor;
}

export interface WithColor {
  theme?: "none" | PaletteColor;
}

export function getGrayTheme(
  theme: "none" | GrayColor,
  classes: {
    slate: string;
    gray: string;
    zinc: string;
    neutral: string;
    stone: string;
  }
) {
  if (theme === "none") {
    return "";
  }

  if (theme in classes) {
    return classes[theme];
  }

  return classes["gray"];
}

export function getTheme(
  theme: "none" | PaletteColor,
  classes: {
    slate: string;
    gray: string;
    zinc: string;
    neutral: string;
    stone: string;
    red: string;
    orange: string;
    amber: string;
    yellow: string;
    lime: string;
    green: string;
    emerald: string;
    teal: string;
    cyan: string;
    sky: string;
    blue: string;
    indigo: string;
    violet: string;
    purple: string;
    fuchsia: string;
    pink: string;
    rose: string;
  }
) {
  if (theme === "none") {
    return "";
  }

  if (theme in classes) {
    return classes[theme];
  }

  return classes["gray"];
}
