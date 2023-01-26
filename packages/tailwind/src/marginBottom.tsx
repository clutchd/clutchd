/**
 * {@link https://tailwindcss.com/docs/margin}
 */

export const marginBottom = [
  "mb-0",
  "mb-pb",
  "mb-0.5",
  "mb-1",
  "mb-1.5",
  "mb-2",
  "mb-2.5",
  "mb-3",
  "mb-3.5",
  "mb-4",
  "mb-5",
  "mb-6",
  "mb-7",
  "mb-8",
  "mb-9",
  "mb-10",
  "mb-11",
  "mb-12",
  "mb-14",
  "mb-16",
  "mb-20",
  "mb-24",
  "mb-28",
  "mb-32",
  "mb-36",
  "mb-40",
  "mb-44",
  "mb-48",
  "mb-52",
  "mb-56",
  "mb-60",
  "mb-64",
  "mb-72",
  "mb-80",
  "mb-96",
] as const;

export type IMarginBottom = (typeof marginBottom)[number];

export interface IWithMarginBottom {
  marginBottom?: IMarginBottom;
}
