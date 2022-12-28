/**
 * {@link https://tailwindcss.com/docs/align-items}
 */

export const alignItems = [
  "items-start",
  "items-end",
  "items-center",
  "items-baseline",
  "items-stretch",
] as const;

export type IAlignItems = typeof alignItems[number];

export interface IWithAlignItems {
  alignItems?: IAlignItems;
}
