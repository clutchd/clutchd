/**
 * {@link https://tailwindcss.com/docs/space}
 */

export const spaceX = [
  "space-x-0",
  "space-x-0.5",
  "space-x-1",
  "space-x-1.5",
  "space-x-2",
  "space-x-2.5",
  "space-x-3",
  "space-x-3.5",
  "space-x-4",
  "space-x-5",
  "space-x-6",
  "space-x-7",
  "space-x-8",
  "space-x-9",
  "space-x-10",
  "space-x-11",
  "space-x-12",
  "space-x-14",
  "space-x-16",
  "space-x-20",
  "space-x-24",
  "space-x-28",
  "space-x-32",
  "space-x-36",
  "space-x-40",
  "space-x-44",
  "space-x-48",
  "space-x-52",
  "space-x-56",
  "space-x-60",
  "space-x-64",
  "space-x-72",
  "space-x-80",
  "space-x-96",
  "space-x-px",
  "space-x-reverse",
] as const;

export type ISpaceX = typeof spaceX[number];

export interface IWithSpaceX {
  spaceX?: ISpaceX;
}
