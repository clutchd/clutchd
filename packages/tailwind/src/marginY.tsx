/**
 * {@link https://tailwindcss.com/docs/margin}
 */

export const marginY = [
  "my-0",
  "my-px",
  "my-0.5",
  "my-1",
  "my-1.5",
  "my-2",
  "my-2.5",
  "my-3",
  "my-3.5",
  "my-4",
  "my-5",
  "my-6",
  "my-7",
  "my-8",
  "my-9",
  "my-10",
  "my-11",
  "my-12",
  "my-14",
  "my-16",
  "my-20",
  "my-24",
  "my-28",
  "my-32",
  "my-36",
  "my-40",
  "my-44",
  "my-48",
  "my-52",
  "my-56",
  "my-60",
  "my-64",
  "my-72",
  "my-80",
  "my-96",
] as const;

export type IMarginY = (typeof marginY)[number];

export interface IWithMarginY {
  marginY?: IMarginY;
}
