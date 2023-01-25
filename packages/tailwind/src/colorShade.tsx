/**
 * {@link https://tailwindcss.com/docs/customizing-colors}
 */

export const colorShade = [
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
] as const;

export type IColorShade = (typeof colorShade)[number];

export interface IWithShade {
  shade?: IColorShade;
}
