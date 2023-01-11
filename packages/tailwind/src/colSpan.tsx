/**
 * {@link https://tailwindcss.com/docs/grid-column}
 */

export const colSpan = [
  "col-auto",
  "col-span-1",
  "col-span-2",
  "col-span-3",
  "col-span-4",
  "col-span-5",
  "col-span-6",
  "col-span-7",
  "col-span-8",
  "col-span-9",
  "col-span-10",
  "col-span-11",
  "col-span-12",
  "col-span-full",
] as const;

export const colSpanSm = [
  "sm:col-auto",
  "sm:col-span-1",
  "sm:col-span-2",
  "sm:col-span-3",
  "sm:col-span-4",
  "sm:col-span-5",
  "sm:col-span-6",
  "sm:col-span-7",
  "sm:col-span-8",
  "sm:col-span-9",
  "sm:col-span-10",
  "sm:col-span-11",
  "sm:col-span-12",
  "sm:col-span-full",
] as const;

export const colSpanMd = [
  "md:col-auto",
  "md:col-span-1",
  "md:col-span-2",
  "md:col-span-3",
  "md:col-span-4",
  "md:col-span-5",
  "md:col-span-6",
  "md:col-span-7",
  "md:col-span-8",
  "md:col-span-9",
  "md:col-span-10",
  "md:col-span-11",
  "md:col-span-12",
  "md:col-span-full",
] as const;

export const colSpanLg = [
  "lg:col-auto",
  "lg:col-span-1",
  "lg:col-span-2",
  "lg:col-span-3",
  "lg:col-span-4",
  "lg:col-span-5",
  "lg:col-span-6",
  "lg:col-span-7",
  "lg:col-span-8",
  "lg:col-span-9",
  "lg:col-span-10",
  "lg:col-span-11",
  "lg:col-span-12",
  "lg:col-span-full",
] as const;

export type IColSpan = (typeof colSpan)[number];

export type IColSpanSm = (typeof colSpanSm)[number];

export type IColSpanMd = (typeof colSpanMd)[number];

export type IColSpanLg = (typeof colSpanLg)[number];

export interface IWithColSpan {
  colSpan?: IColSpan;
  colSpanSm?: IColSpanSm;
  colSpanMd?: IColSpanMd;
  colSpanLg?: IColSpanLg;
}

export type IColSpanValues =
  | "auto"
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | "full";

export interface IWithColSpanValues {
  colSpan?: IColSpanValues;
  colSpanSm?: IColSpanValues;
  colSpanMd?: IColSpanValues;
  colSpanLg?: IColSpanValues;
}

/**
 * Gets the `standard` col span class for the value provided
 * @param value `IColSpanValues` used to get this class
 */
export function GetColSpan(value: IColSpanValues | undefined) {
  return GetColSpanValue(value, colSpan);
}

/**
 * Gets the `sm` col span class for the value provided
 * @param value `IColSpanValues` used to get this class
 */
export function GetColSpanSm(value: IColSpanValues | undefined) {
  return GetColSpanValue(value, colSpanSm);
}

/**
 * Gets the `md` col span class for the value provided
 * @param value `IColSpanValues` used to get this class
 */
export function GetColSpanMd(value: IColSpanValues | undefined) {
  return GetColSpanValue(value, colSpanMd);
}

/**
 * Gets the `lg` col span class for the value provided
 * @param value `IColSpanValues` used to get this class
 */
export function GetColSpanLg(value: IColSpanValues | undefined) {
  return GetColSpanValue(value, colSpanLg);
}

/**
 * Helper function to get the proper col span classes
 * @param value Underlying `IColSpanValues` we are targeting
 * @param type Type of span being generated (sm,md,lg,etc.)
 * @returns The appropriate tailwind class for the value and type combination
 */
function GetColSpanValue(
  value: IColSpanValues | undefined,
  type: typeof colSpan | typeof colSpanSm | typeof colSpanMd | typeof colSpanLg
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
      result = 13;
      break;

    default:
      result = value as number;
      break;
  }

  return type[result];
}
