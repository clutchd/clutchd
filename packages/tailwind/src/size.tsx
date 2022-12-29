import { height, width } from "./";

/**
 * A custom type use to simplify consistent height and width, only focuses on absolute sizing
 * {@link https://tailwindcss.com/docs/height}
 * {@link https://tailwindcss.com/docs/width}
 */
export const size = [
  "0",
  "px",
  "0.5",
  "1",
  "1.5",
  "2",
  "2.5",
  "3",
  "3.5",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "14",
  "16",
  "20",
  "24",
  "28",
  "32",
  "36",
  "40",
  "44",
  "48",
  "52",
  "56",
  "60",
  "64",
  "72",
  "80",
  "96",
] as const;

export type ISize = typeof size[number];

export const getSize = (base: ISize) => {
  return `${height[size.indexOf(base)]} ${width[size.indexOf(base)]}`;
};

export interface IWithSize {
  size?: ISize;
}
