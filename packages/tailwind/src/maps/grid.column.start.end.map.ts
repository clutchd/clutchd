import {
  ColSpan,
  ColSpanNumberVariants,
  ColSpanVariants,
  ScreenVariants,
  WithModifier,
} from "..";

/**
 * Grid Column Start / End Map - Preset map to define available absolute grid column values
 * @see https://tailwindcss.com/docs/grid-column
 */

type GridColSpanMap<Screen extends ScreenVariants | "" = ""> = {
  [variant in "auto" | ColSpanVariants]: variant extends ColSpanVariants
    ? `${Screen extends ScreenVariants ? `${Screen}:` : ""}col-span-${variant}`
    : `${Screen extends ScreenVariants ? `${Screen}:` : ""}col-${variant}`;
};

export const gridColSpanMap: GridColSpanMap = {
  auto: "col-auto",
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
  7: "col-span-7",
  8: "col-span-8",
  9: "col-span-9",
  10: "col-span-10",
  11: "col-span-11",
  12: "col-span-12",
  full: "col-span-full",
};

export const gridColSpanSmMap: GridColSpanMap<"sm"> = {
  auto: "sm:col-auto",
  1: "sm:col-span-1",
  2: "sm:col-span-2",
  3: "sm:col-span-3",
  4: "sm:col-span-4",
  5: "sm:col-span-5",
  6: "sm:col-span-6",
  7: "sm:col-span-7",
  8: "sm:col-span-8",
  9: "sm:col-span-9",
  10: "sm:col-span-10",
  11: "sm:col-span-11",
  12: "sm:col-span-12",
  full: "sm:col-span-full",
};

export const gridColSpanMdMap: GridColSpanMap<"md"> = {
  auto: "md:col-auto",
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-4",
  5: "md:col-span-5",
  6: "md:col-span-6",
  7: "md:col-span-7",
  8: "md:col-span-8",
  9: "md:col-span-9",
  10: "md:col-span-10",
  11: "md:col-span-11",
  12: "md:col-span-12",
  full: "md:col-span-full",
};

export const gridColSpanLgMap: GridColSpanMap<"lg"> = {
  auto: "lg:col-auto",
  1: "lg:col-span-1",
  2: "lg:col-span-2",
  3: "lg:col-span-3",
  4: "lg:col-span-4",
  5: "lg:col-span-5",
  6: "lg:col-span-6",
  7: "lg:col-span-7",
  8: "lg:col-span-8",
  9: "lg:col-span-9",
  10: "lg:col-span-10",
  11: "lg:col-span-11",
  12: "lg:col-span-12",
  full: "lg:col-span-full",
};

/**
 * Gets the `standard` col span class for the value provided
 * @param value `ColSpan` used to get this class
 */
export function getColSpan(value: ColSpan | ColSpanNumberVariants | undefined) {
  return getColSpanValue(value, gridColSpanMap);
}

/**
 * Gets the `sm` col span class for the value provided
 * @param value `ColSpan` used to get this class
 */
export function getColSpanSm(
  value: WithModifier<"sm", ColSpan> | ColSpanNumberVariants | undefined
) {
  return getColSpanValue(value, gridColSpanSmMap);
}

/**
 * Gets the `md` col span class for the value provided
 * @param value `ColSpan` used to get this class
 */
export function getColSpanMd(
  value: WithModifier<"md", ColSpan> | ColSpanNumberVariants | undefined
) {
  return getColSpanValue(value, gridColSpanMdMap);
}

/**
 * Gets the `lg` col span class for the value provided
 * @param value `ColSpan` used to get this class
 */
export function getColSpanLg(
  value: WithModifier<"lg", ColSpan> | ColSpanNumberVariants | undefined
) {
  return getColSpanValue(value, gridColSpanLgMap);
}

/**
 * Helper function to get the proper col span classes
 * @param value `ColSpan` used to get this class
 * @param map Type of span being generated (sm,md,lg,etc.)
 * @returns The appropriate tailwind class for the value and type combination
 */
function getColSpanValue(
  value:
    | ColSpan
    | WithModifier<"sm", ColSpan>
    | WithModifier<"md", ColSpan>
    | WithModifier<"lg", ColSpan>
    | ColSpanNumberVariants
    | undefined,
  map:
    | typeof gridColSpanMap
    | typeof gridColSpanSmMap
    | typeof gridColSpanMdMap
    | typeof gridColSpanLgMap
): string {
  if (value == null) {
    return "";
  }

  if (typeof value !== "number") {
    return value;
  }

  let index: "auto" | ColSpanVariants;
  switch (value) {
    case 0:
      index = "auto";
      break;

    case 13:
      index = "full";
      break;

    default:
      index = value.toString() as ColSpanVariants;
      break;
  }
  return map[index];
}
