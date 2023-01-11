/**
 * {@link https://tailwindcss.com/docs/gap}
 */
export const gapY = [
  "gap-y-0",
  "gap-y-px",
  "gap-y-0.5",
  "gap-y-1",
  "gap-y-1.5",
  "gap-y-2",
  "gap-y-2.5",
  "gap-y-3",
  "gap-y-3.5",
  "gap-y-4",
  "gap-y-5",
  "gap-y-6",
  "gap-y-7",
  "gap-y-8",
  "gap-y-9",
  "gap-y-10",
  "gap-y-11",
  "gap-y-12",
  "gap-y-14",
  "gap-y-16",
  "gap-y-20",
  "gap-y-24",
  "gap-y-28",
  "gap-y-32",
  "gap-y-36",
  "gap-y-40",
  "gap-y-44",
  "gap-y-48",
  "gap-y-52",
  "gap-y-56",
  "gap-y-60",
  "gap-y-64",
  "gap-y-72",
  "gap-y-80",
  "gap-y-96",
] as const;

export type IGapY = (typeof gapY)[number];

export interface IWithGapY {
  gapY?: IGapY;
}
