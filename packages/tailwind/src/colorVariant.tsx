/**
 * {@link https://tailwindcss.com/docs/customizing-colors}
 */

export const colorVariant = [
  "bgColor",
  "hoverBgColor",
  "textColor",
  "hoverTextColor",
  "borderColor",
  "hoverBorderColor",
  "ringColor",
  "hoverRingColor",
  "divideColor",
  "outlineColor",
  "focusRingColor",
] as const;

export type IColorVariant = (typeof colorVariant)[number];
