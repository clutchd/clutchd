/**
 * Spacing Variants
 * @see https://tailwindcss.com/docs/customizing-spacing
 */

export const spacing = [
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

export interface WithSpacing {
  spacing?: SpacingVariants;
}

export type SpacingVariants = (typeof spacing)[number];

export const spacingPx = [
  0, 1, 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 56, 64, 80,
  96, 112, 128, 144, 160, 176, 192, 208, 224, 240, 256, 288, 320, 384,
] as const;

export type SpacingPxVariants = (typeof spacingPx)[number];
