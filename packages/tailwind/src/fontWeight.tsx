/**
 * {@link https://tailwindcss.com/docs/font-weight}
 */

export const fontWeight = [
  "font-thin",
  "font-extralight",
  "font-light",
  "font-normal",
  "font-medium",
  "font-semibold",
  "font-bold",
  "font-extrabold",
  "font-black",
];

export type IFontWeight = typeof fontWeight[number];

export interface IWithFontWeight {
  fontWeight: IFontWeight;
}
