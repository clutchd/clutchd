import { IColorMap, IColorShade } from ".";

/**
 * {@link https://tailwindcss.com/docs/customizing-colors}
 */

export const none = ["none"] as const;

export const staticColor = ["transparent", "black", "white"] as const;

export const paletteColor = [
  "brand",
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
] as const;

export type INoColor = (typeof none)[number];

export type IStaticColor = (typeof staticColor)[number];

export type IPaletteColor = (typeof paletteColor)[number];

export type IColor = INoColor | IStaticColor | IPaletteColor;

export interface IWithColor {
  theme?: IColor;
}

export function getColor(
  map: IColorMap<string>,
  color: IColor,
  shade: IColorShade = "500"
) {
  switch (color) {
    case "none":
      return "";
    case "transparent":
    case "black":
    case "white":
      return map[color]["none"];

    default:
      return map[color][shade];
  }
}
