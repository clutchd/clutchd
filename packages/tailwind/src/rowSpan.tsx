/**
 * {@link https://tailwindcss.com/docs/grid-row}
 */

const rowSpan = [
  "row-auto",
  "row-span-1",
  "row-span-2",
  "row-span-3",
  "row-span-4",
  "row-span-5",
  "row-span-6",
  "row-span-full",
] as const;

const rowSpanSm = [
  "sm:row-auto",
  "sm:row-span-1",
  "sm:row-span-2",
  "sm:row-span-3",
  "sm:row-span-4",
  "sm:row-span-5",
  "sm:row-span-6",
  "sm:row-span-full",
] as const;

const rowSpanMd = [
  "md:row-auto",
  "md:row-span-1",
  "md:row-span-2",
  "md:row-span-3",
  "md:row-span-4",
  "md:row-span-5",
  "md:row-span-6",
  "md:row-span-full",
] as const;

const rowSpanLg = [
  "lg:row-auto",
  "lg:row-span-1",
  "lg:row-span-2",
  "lg:row-span-3",
  "lg:row-span-4",
  "lg:row-span-5",
  "lg:row-span-6",
  "lg:row-span-full",
] as const;

export type IRowSpan = typeof rowSpan[number];

export type IRowSpanSm = typeof rowSpanSm[number];

export type IRowSpanMd = typeof rowSpanMd[number];

export type IRowSpanLg = typeof rowSpanLg[number];

export interface IWithRowSpan {
  rowSpan?: IRowSpan;
  rowSpanSm?: IRowSpanSm;
  rowSpanMd?: IRowSpanMd;
  rowSpanLg?: IRowSpanLg;
}
