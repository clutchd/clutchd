import { IColorShade, INoColor, IPaletteColor, IStaticColor } from ".";

/**
 * {@link https://tailwindcss.com/docs/customizing-colors}
 */

export type IStaticColorMap<T> = {
  [color in IStaticColor]: {
    [shade in INoColor]: T;
  };
};

export type IPaletteColorMap<T> = {
  [color in IPaletteColor]: {
    [shade in IColorShade]: T;
  };
};

export type IColorMap<T = string> = IStaticColorMap<T> & IPaletteColorMap<T>;
