import { SpacingVariants } from "..";

/**
 * Width Map - Preset map to define available absolute widths
 * @see https://tailwindcss.com/docs/width
 */

type WidthMap = {
  [spacing in SpacingVariants]: `w-${spacing}`;
};

export const widthMap: WidthMap = {
  0: "w-0",
  px: "w-px",
  0.5: "w-0.5",
  1: "w-1",
  1.5: "w-1.5",
  2: "w-2",
  2.5: "w-2.5",
  3: "w-3",
  3.5: "w-3.5",
  4: "w-4",
  5: "w-5",
  6: "w-6",
  7: "w-7",
  8: "w-8",
  9: "w-9",
  10: "w-10",
  11: "w-11",
  12: "w-12",
  14: "w-14",
  16: "w-16",
  20: "w-20",
  24: "w-24",
  28: "w-28",
  32: "w-32",
  36: "w-36",
  40: "w-40",
  44: "w-44",
  48: "w-48",
  52: "w-52",
  56: "w-56",
  60: "w-60",
  64: "w-64",
  72: "w-72",
  80: "w-80",
  96: "w-96",
};
