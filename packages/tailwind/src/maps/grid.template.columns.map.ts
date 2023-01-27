import {
  GridCols,
  GridColsNumberVariants,
  GridColsVariants,
  ScreenVariants,
  WithModifier,
} from "..";

/**
 * Grid Template Columns Map - Preset map to define available absolute grid template columns values
 * @see https://tailwindcss.com/docs/grid-template-columns
 */

type GridColsMap<Screen extends ScreenVariants | "" = ""> = {
  [variant in GridColsVariants]: `${Screen extends ScreenVariants
    ? `${Screen}:`
    : ""}grid-cols-${variant}`;
};

export const gridColsMap: GridColsMap = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  7: "grid-cols-7",
  8: "grid-cols-8",
  9: "grid-cols-9",
  10: "grid-cols-10",
  11: "grid-cols-11",
  12: "grid-cols-12",
  none: "grid-cols-none",
};

export const gridColsSmMap: GridColsMap<"sm"> = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
  5: "sm:grid-cols-5",
  6: "sm:grid-cols-6",
  7: "sm:grid-cols-7",
  8: "sm:grid-cols-8",
  9: "sm:grid-cols-9",
  10: "sm:grid-cols-10",
  11: "sm:grid-cols-11",
  12: "sm:grid-cols-12",
  none: "sm:grid-cols-none",
};

export const gridColsMdMap: GridColsMap<"md"> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
  5: "md:grid-cols-5",
  6: "md:grid-cols-6",
  7: "md:grid-cols-7",
  8: "md:grid-cols-8",
  9: "md:grid-cols-9",
  10: "md:grid-cols-10",
  11: "md:grid-cols-11",
  12: "md:grid-cols-12",
  none: "md:grid-cols-none",
};

export const gridColsLgMap: GridColsMap<"lg"> = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
  7: "lg:grid-cols-7",
  8: "lg:grid-cols-8",
  9: "lg:grid-cols-9",
  10: "lg:grid-cols-10",
  11: "lg:grid-cols-11",
  12: "lg:grid-cols-12",
  none: "lg:grid-cols-none",
};

/**
 * Gets the `standard` grid template col class for the value provided
 * @param value `GridCols` used to get this class
 */
export function getGridCols(
  value: GridCols | GridColsNumberVariants | undefined
) {
  return getGridColsValue(value, gridColsMap);
}

/**
 * Gets the `sm` grid template col class for the value provided
 * @param value `GridCols` used to get this class
 */
export function getGridColsSm(
  value: WithModifier<"sm", GridCols> | GridColsNumberVariants | undefined
) {
  return getGridColsValue(value, gridColsSmMap);
}

/**
 * Gets the `md` grid template col class for the value provided
 * @param value `GridCols` used to get this class
 */
export function getGridColsMd(
  value: WithModifier<"md", GridCols> | GridColsNumberVariants | undefined
) {
  return getGridColsValue(value, gridColsMdMap);
}

/**
 * Gets the `lg` grid template col class for the value provided
 * @param value `GridCols` used to get this class
 */
export function getGridColsLg(
  value: WithModifier<"lg", GridCols> | GridColsNumberVariants | undefined
) {
  return getGridColsValue(value, gridColsLgMap);
}

/**
 * Helper function to get the proper grid template col classes
 * @param value `GridCols` used to get this class
 * @param map Type of span being generated (sm,md,lg,etc.)
 * @returns The appropriate tailwind class for the value and type combination
 */
function getGridColsValue(
  value:
    | GridCols
    | WithModifier<"sm", GridCols>
    | WithModifier<"md", GridCols>
    | WithModifier<"lg", GridCols>
    | GridColsNumberVariants
    | undefined,
  map:
    | typeof gridColsMap
    | typeof gridColsSmMap
    | typeof gridColsMdMap
    | typeof gridColsLgMap
): string {
  if (value == null) {
    return "";
  }

  if (typeof value !== "number") {
    return value;
  }

  let index: GridColsVariants;
  switch (value) {
    case 0:
      index = "none";
      break;

    default:
      index = value.toString() as GridColsVariants;
      break;
  }
  return map[index];
}
