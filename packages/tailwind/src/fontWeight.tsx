/**
 * {@link https://tailwindcss.com/docs/font-weight}
 */

const fontWeight = [
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

type IFontWeight = typeof fontWeight[number];

interface IWithFontWeight {
  fontWeight: IFontWeight;
}

export { fontWeight };
export type { IFontWeight, IWithFontWeight };
