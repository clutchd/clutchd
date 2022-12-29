/**
 * {@link https://tailwindcss.com/docs/margin}
 */

export const marginX = [
  "mx-0",
  "mx-px",
  "mx-0.5",
  "mx-1",
  "mx-1.5",
  "mx-2",
  "mx-2.5",
  "mx-3",
  "mx-3.5",
  "mx-4",
  "mx-5",
  "mx-6",
  "mx-7",
  "mx-8",
  "mx-9",
  "mx-10",
  "mx-11",
  "mx-12",
  "mx-14",
  "mx-16",
  "mx-20",
  "mx-24",
  "mx-28",
  "mx-32",
  "mx-36",
  "mx-40",
  "mx-44",
  "mx-48",
  "mx-52",
  "mx-56",
  "mx-60",
  "mx-64",
  "mx-72",
  "mx-80",
  "mx-96",
] as const;

export type IMarginX = typeof marginX[number];

export interface IWithMarginX {
  marginX?: IMarginX;
}
