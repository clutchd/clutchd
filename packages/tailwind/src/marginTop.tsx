/**
 * {@link https://tailwindcss.com/docs/margin}
 */

export const marginTop = [
  "mt-0",
  "mt-pb",
  "mt-0.5",
  "mt-1",
  "mt-1.5",
  "mt-2",
  "mt-2.5",
  "mt-3",
  "mt-3.5",
  "mt-4",
  "mt-5",
  "mt-6",
  "mt-7",
  "mt-8",
  "mt-9",
  "mt-10",
  "mt-11",
  "mt-12",
  "mt-14",
  "mt-16",
  "mt-20",
  "mt-24",
  "mt-28",
  "mt-32",
  "mt-36",
  "mt-40",
  "mt-44",
  "mt-48",
  "mt-52",
  "mt-56",
  "mt-60",
  "mt-64",
  "mt-72",
  "mt-80",
  "mt-96",
] as const;

export type IMarginTop = (typeof marginTop)[number];

export interface IWithMarginTop {
  marginBottom?: IMarginTop;
}
