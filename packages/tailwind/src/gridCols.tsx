/**
 * {@link https://tailwindcss.com/docs/grid-template-columns}
 */

export const gridCols = [
  "grid-cols-none",
  "grid-cols-1",
  "grid-cols-2",
  "grid-cols-3",
  "grid-cols-4",
  "grid-cols-5",
  "grid-cols-6",
  "grid-cols-7",
  "grid-cols-8",
  "grid-cols-9",
  "grid-cols-10",
  "grid-cols-11",
  "grid-cols-12",
] as const;

export const gridColsSm = [
  "sm:grid-cols-none",
  "sm:grid-cols-1",
  "sm:grid-cols-2",
  "sm:grid-cols-3",
  "sm:grid-cols-4",
  "sm:grid-cols-5",
  "sm:grid-cols-6",
  "sm:grid-cols-7",
  "sm:grid-cols-8",
  "sm:grid-cols-9",
  "sm:grid-cols-10",
  "sm:grid-cols-11",
  "sm:grid-cols-12",
] as const;

export const gridColsMd = [
  "md:grid-cols-none",
  "md:grid-cols-1",
  "md:grid-cols-2",
  "md:grid-cols-3",
  "md:grid-cols-4",
  "md:grid-cols-5",
  "md:grid-cols-6",
  "md:grid-cols-7",
  "md:grid-cols-8",
  "md:grid-cols-9",
  "md:grid-cols-10",
  "md:grid-cols-11",
  "md:grid-cols-12",
] as const;

export const gridColsLg = [
  "lg:grid-cols-none",
  "lg:grid-cols-1",
  "lg:grid-cols-2",
  "lg:grid-cols-3",
  "lg:grid-cols-4",
  "lg:grid-cols-5",
  "lg:grid-cols-6",
  "lg:grid-cols-7",
  "lg:grid-cols-8",
  "lg:grid-cols-9",
  "lg:grid-cols-10",
  "lg:grid-cols-11",
  "lg:grid-cols-12",
] as const;

export type IGridCols = (typeof gridCols)[number];

export type IGridColsSm = (typeof gridColsSm)[number];

export type IGridColsMd = (typeof gridColsMd)[number];

export type IGridColsLg = (typeof gridColsLg)[number];

export interface IWithGridCols {
  gridCols?: IGridCols;
  gridColsSm?: IGridColsSm;
  gridColsMd?: IGridColsMd;
  gridColsLg?: IGridColsLg;
}

export type IGridColsValues =
  | 0
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
  | 12;

export interface IWithGridColsValues {
  gridCols?: IGridColsValues;
  gridColsSm?: IGridColsValues;
  gridColsMd?: IGridColsValues;
  gridColsLg?: IGridColsValues;
}

/**
 * Gets the `standard` grid col class for the value provided
 * @param value `IGridColsValues` used to get this class
 */
export function getGridCols(value: IGridColsValues | undefined) {
  return getGridColsValue(value, gridCols);
}

/**
 * Gets the `sm` grid col class for the value provided
 * @param value `IGridColsValues` used to get this class
 */
export function getGridColsSm(value: IGridColsValues | undefined) {
  return getGridColsValue(value, gridColsSm);
}

/**
 * Gets the `md` grid col class for the value provided
 * @param value `IGridColsValues` used to get this class
 */
export function getGridColsMd(value: IGridColsValues | undefined) {
  return getGridColsValue(value, gridColsMd);
}

/**
 * Gets the `lg` grid col class for the value provided
 * @param value `IGridColsValues` used to get this class
 */
export function getGridColsLg(value: IGridColsValues | undefined) {
  return getGridColsValue(value, gridColsLg);
}

/**
 * Helper function to get the proper grid col classes
 * @param value Underlying `IGridColsValues` we are targeting
 * @param type Type of grid col being generated (sm,md,lg,etc.)
 * @returns The appropriate tailwind class for the value and type combination
 */
function getGridColsValue(
  value: IGridColsValues | undefined,
  type:
    | typeof gridCols
    | typeof gridColsSm
    | typeof gridColsMd
    | typeof gridColsLg
): string {
  if (value == null) {
    return "";
  }

  return type[value];
}
