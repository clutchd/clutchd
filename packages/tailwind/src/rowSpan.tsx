/**
 * {@link https://tailwindcss.com/docs/grid-row}
 */

export const rowSpan = [
  "row-auto",
  "row-span-1",
  "row-span-2",
  "row-span-3",
  "row-span-4",
  "row-span-5",
  "row-span-6",
  "row-span-full",
] as const;

export const rowSpanSm = [
  "sm:row-auto",
  "sm:row-span-1",
  "sm:row-span-2",
  "sm:row-span-3",
  "sm:row-span-4",
  "sm:row-span-5",
  "sm:row-span-6",
  "sm:row-span-full",
] as const;

export const rowSpanMd = [
  "md:row-auto",
  "md:row-span-1",
  "md:row-span-2",
  "md:row-span-3",
  "md:row-span-4",
  "md:row-span-5",
  "md:row-span-6",
  "md:row-span-full",
] as const;

export const rowSpanLg = [
  "lg:row-auto",
  "lg:row-span-1",
  "lg:row-span-2",
  "lg:row-span-3",
  "lg:row-span-4",
  "lg:row-span-5",
  "lg:row-span-6",
  "lg:row-span-full",
] as const;

export type IRowSpan = (typeof rowSpan)[number];

export type IRowSpanSm = (typeof rowSpanSm)[number];

export type IRowSpanMd = (typeof rowSpanMd)[number];

export type IRowSpanLg = (typeof rowSpanLg)[number];

export interface IWithRowSpan {
  rowSpan?: IRowSpan;
  rowSpanSm?: IRowSpanSm;
  rowSpanMd?: IRowSpanMd;
  rowSpanLg?: IRowSpanLg;
}

export type IRowSpanValues = "auto" | 1 | 2 | 3 | 4 | 5 | 6 | "full";

export interface IWithRowSpanValues {
  rowSpan?: IRowSpanValues;
  rowSpanSm?: IRowSpanValues;
  rowSpanMd?: IRowSpanValues;
  rowSpanLg?: IRowSpanValues;
}

/**
 * Gets the `standard` row span class for the value provided
 * @param value `IRowSpanValues` used to get this class
 */
export function getRowSpan(value: IRowSpanValues | undefined) {
  return getRowSpanValue(value, rowSpan);
}

/**
 * Gets the `sm` row span class for the value provided
 * @param value `IRowSpanValues` used to get this class
 */
export function getRowSpanSm(value: IRowSpanValues | undefined) {
  return getRowSpanValue(value, rowSpanSm);
}

/**
 * Gets the `md` row span class for the value provided
 * @param value `IRowSpanValues` used to get this class
 */
export function getRowSpanMd(value: IRowSpanValues | undefined) {
  return getRowSpanValue(value, rowSpanMd);
}

/**
 * Gets the `lg` row span class for the value provided
 * @param value `IRowSpanValues` used to get this class
 */
export function getRowSpanLg(value: IRowSpanValues | undefined) {
  return getRowSpanValue(value, rowSpanLg);
}

/**
 * Helper function to get the proper row span classes
 * @param value Underlying `IRowSpanValues` we are targeting
 * @param type Type of span being generated (sm,md,lg,etc.)
 * @returns The appropriate tailwind class for the value and type combination
 */
function getRowSpanValue(
  value: IRowSpanValues | undefined,
  type: typeof rowSpan | typeof rowSpanSm | typeof rowSpanMd | typeof rowSpanLg
): string {
  if (value == null) {
    return "";
  }

  // get resulting value
  var result: number;
  switch (value) {
    case "auto":
      result = 0;
      break;

    case "full":
      result = 7;
      break;

    default:
      result = value as number;
      break;
  }

  return type[result];
}
