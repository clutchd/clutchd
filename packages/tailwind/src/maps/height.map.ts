import { SpacingVariants } from "..";

/**
 * Height Map - Preset map to define available absolute heights
 * @see https://tailwindcss.com/docs/height
 */

type HeightMap = {
  [spacing in SpacingVariants]: `h-${spacing}`;
};

export const heightMap: HeightMap = {
  0: "h-0",
  px: "h-px",
  0.5: "h-0.5",
  1: "h-1",
  1.5: "h-1.5",
  2: "h-2",
  2.5: "h-2.5",
  3: "h-3",
  3.5: "h-3.5",
  4: "h-4",
  5: "h-5",
  6: "h-6",
  7: "h-7",
  8: "h-8",
  9: "h-9",
  10: "h-10",
  11: "h-11",
  12: "h-12",
  14: "h-14",
  16: "h-16",
  20: "h-20",
  24: "h-24",
  28: "h-28",
  32: "h-32",
  36: "h-36",
  40: "h-40",
  44: "h-44",
  48: "h-48",
  52: "h-52",
  56: "h-56",
  60: "h-60",
  64: "h-64",
  72: "h-72",
  80: "h-80",
  96: "h-96",
};
