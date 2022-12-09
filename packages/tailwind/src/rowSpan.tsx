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

export type IRowSpanValues = "auto" | 1 | 2 | 3 | 4 | 5 | 6 | "full";

export interface IWithRowSpanValues {
  rowSpan?: IRowSpanValues;
  rowSpanSm?: IRowSpanValues;
  rowSpanMd?: IRowSpanValues;
  rowSpanLg?: IRowSpanValues;
}

/**
 * Gets the `standard` row span class for the span provided
 * @param span `IRowSpanValues` used to get this class
 */
export function GetRowSpan(span: IRowSpanValues | undefined) {
  GetRowSpanValue(span, rowSpan);
}

/**
 * Gets the `sm` row span class for the span provided
 * @param span `IRowSpanValues` used to get this class
 */
export function GetRowSpanSm(span: IRowSpanValues | undefined) {
  GetRowSpanValue(span, rowSpanSm);
}

/**
 * Gets the `md` row span class for the span provided
 * @param span `IRowSpanValues` used to get this class
 */
export function GetRowSpanMd(span: IRowSpanValues | undefined) {
  GetRowSpanValue(span, rowSpanMd);
}

/**
 * Gets the `lg` row span class for the span provided
 * @param span `IRowSpanValues` used to get this class
 */
export function GetRowSpanLg(span: IRowSpanValues | undefined) {
  GetRowSpanValue(span, rowSpanLg);
}

/**
 * Helper function to get the proper row span classes
 * @param span Underlying `IRowSpanValues` we are targeting
 * @param type Type of span being generated (sm,md,lg,etc.)
 * @returns The appropriate tailwind class for the span and type combination
 */
function GetRowSpanValue(
  span: IRowSpanValues | undefined,
  type: typeof rowSpan | typeof rowSpanSm | typeof rowSpanMd | typeof rowSpanLg
): string {
  if (span == null) {
    return "";
  }

  // get underlying value
  var value: number;
  switch (span) {
    case "auto":
      value = 0;
      break;

    case "full":
      value = 7;
      break;

    default:
      value = span as number;
      break;
  }

  return rowSpan[value];
}
