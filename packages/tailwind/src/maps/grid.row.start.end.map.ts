import {
  RowSpan,
  RowSpanNumberVariants,
  RowSpanVariants,
  ScreenVariants,
  WithModifier,
} from "..";

/**
 * Grid Row Start / End Map - Preset map to define available absolute grid row values
 * @see https://tailwindcss.com/docs/grid-row
 */

type GridRowSpanMap<Screen extends ScreenVariants | "" = ""> = {
  [variant in "auto" | RowSpanVariants]: variant extends RowSpanVariants
    ? `${Screen extends ScreenVariants ? `${Screen}:` : ""}row-span-${variant}`
    : `${Screen extends ScreenVariants ? `${Screen}:` : ""}row-${variant}`;
};

export const gridRowSpanMap: GridRowSpanMap = {
  auto: "row-auto",
  1: "row-span-1",
  2: "row-span-2",
  3: "row-span-3",
  4: "row-span-4",
  5: "row-span-5",
  6: "row-span-6",
  full: "row-span-full",
};

export const gridRowSpanSmMap: GridRowSpanMap<"sm"> = {
  auto: "sm:row-auto",
  1: "sm:row-span-1",
  2: "sm:row-span-2",
  3: "sm:row-span-3",
  4: "sm:row-span-4",
  5: "sm:row-span-5",
  6: "sm:row-span-6",
  full: "sm:row-span-full",
};

export const gridRowSpanMdMap: GridRowSpanMap<"md"> = {
  auto: "md:row-auto",
  1: "md:row-span-1",
  2: "md:row-span-2",
  3: "md:row-span-3",
  4: "md:row-span-4",
  5: "md:row-span-5",
  6: "md:row-span-6",
  full: "md:row-span-full",
};

export const gridRowSpanLgMap: GridRowSpanMap<"lg"> = {
  auto: "lg:row-auto",
  1: "lg:row-span-1",
  2: "lg:row-span-2",
  3: "lg:row-span-3",
  4: "lg:row-span-4",
  5: "lg:row-span-5",
  6: "lg:row-span-6",
  full: "lg:row-span-full",
};

/**
 * Gets the `standard` row span class for the value provided
 * @param value `RowSpan` used to get this class
 */
export function getRowSpan(value: RowSpan | RowSpanNumberVariants | undefined) {
  return getRowSpanValue(value, gridRowSpanMap);
}

/**
 * Gets the `sm` row span class for the value provided
 * @param value `RowSpan` used to get this class
 */
export function getRowSpanSm(
  value: WithModifier<"sm", RowSpan> | RowSpanNumberVariants | undefined
) {
  return getRowSpanValue(value, gridRowSpanSmMap);
}

/**
 * Gets the `md` row span class for the value provided
 * @param value `RowSpan` used to get this class
 */
export function getRowSpanMd(
  value: WithModifier<"md", RowSpan> | RowSpanNumberVariants | undefined
) {
  return getRowSpanValue(value, gridRowSpanMdMap);
}

/**
 * Gets the `lg` row span class for the value provided
 * @param value `RowSpan` used to get this class
 */
export function getRowSpanLg(
  value: WithModifier<"lg", RowSpan> | RowSpanNumberVariants | undefined
) {
  return getRowSpanValue(value, gridRowSpanLgMap);
}

/**
 * Helper function to get the proper row span classes
 * @param value `RowSpan` used to get this class
 * @param map Type of span being generated (sm,md,lg,etc.)
 * @returns The appropriate tailwind class for the value and type combination
 */
function getRowSpanValue(
  value:
    | RowSpan
    | WithModifier<"sm", RowSpan>
    | WithModifier<"md", RowSpan>
    | WithModifier<"lg", RowSpan>
    | RowSpanNumberVariants
    | undefined,
  map:
    | typeof gridRowSpanMap
    | typeof gridRowSpanSmMap
    | typeof gridRowSpanMdMap
    | typeof gridRowSpanLgMap
): string {
  if (value == null) {
    return "";
  }

  if (typeof value !== "number") {
    return value;
  }

  let index: "auto" | RowSpanVariants;
  switch (value) {
    case 0:
      index = "auto";
      break;

    case 7:
      index = "full";
      break;

    default:
      index = value.toString() as RowSpanVariants;
      break;
  }
  return map[index];
}
