/**
 * {@link https://tailwindcss.com/docs/gap}
 */
export const gapX = [
  "gap-x-0",
  "gap-x-px",
  "gap-x-0.5",
  "gap-x-1",
  "gap-x-1.5",
  "gap-x-2",
  "gap-x-2.5",
  "gap-x-3",
  "gap-x-3.5",
  "gap-x-4",
  "gap-x-5",
  "gap-x-6",
  "gap-x-7",
  "gap-x-8",
  "gap-x-9",
  "gap-x-10",
  "gap-x-11",
  "gap-x-12",
  "gap-x-14",
  "gap-x-16",
  "gap-x-20",
  "gap-x-24",
  "gap-x-28",
  "gap-x-32",
  "gap-x-36",
  "gap-x-40",
  "gap-x-44",
  "gap-x-48",
  "gap-x-52",
  "gap-x-56",
  "gap-x-60",
  "gap-x-64",
  "gap-x-72",
  "gap-x-80",
  "gap-x-96",
] as const;

export type IGapX = (typeof gapX)[number];

export interface IWithGapX {
  gapX?: IGapX;
}
