/**
 * {@link https://tailwindcss.com/docs/"border-width}
 */

export const borderWidth = [
  "border-0",
  "border-2",
  "border-4",
  "border-8",
  "border",
  "border-x-0",
  "border-x-2",
  "border-x-4",
  "border-x-8",
  "border-x",
  "border-y-0",
  "border-y-2",
  "border-y-4",
  "border-y-8",
  "border-y",
  "border-t-0",
  "border-t-2",
  "border-t-4",
  "border-t-8",
  "border-t",
  "border-r-0",
  "border-r-2",
  "border-r-4",
  "border-r-8",
  "border-r",
  "border-b-0",
  "border-b-2",
  "border-b-4",
  "border-b-8",
  "border-b",
  "border-l-0",
  "border-l-2",
  "border-l-4",
  "border-l-8",
  "border-l",
] as const;

export type IBorderWidth = typeof borderWidth[number];

export interface IWithBorderWidth {
  borderWidth?: IBorderWidth;
}
