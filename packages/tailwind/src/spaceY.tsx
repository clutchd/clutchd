/**
 * {@link https://tailwindcss.com/docs/space}
 */

export const spaceY = [
  "space-y-0",
  "space-y-0.5",
  "space-y-1",
  "space-y-1.5",
  "space-y-2",
  "space-y-2.5",
  "space-y-3",
  "space-y-3.5",
  "space-y-4",
  "space-y-5",
  "space-y-6",
  "space-y-7",
  "space-y-8",
  "space-y-9",
  "space-y-10",
  "space-y-11",
  "space-y-12",
  "space-y-14",
  "space-y-16",
  "space-y-20",
  "space-y-24",
  "space-y-28",
  "space-y-32",
  "space-y-36",
  "space-y-40",
  "space-y-44",
  "space-y-48",
  "space-y-52",
  "space-y-56",
  "space-y-60",
  "space-y-64",
  "space-y-72",
  "space-y-80",
  "space-y-96",
  "space-y-px",
  "space-y-reverse",
] as const;

export type ISpaceY = typeof spaceY[number];

export interface IWithSpaceY {
  spaceY?: ISpaceY;
}
