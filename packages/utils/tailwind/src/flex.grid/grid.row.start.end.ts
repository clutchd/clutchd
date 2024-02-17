import { WithModifier, WithVariants, OneThroughTwelve } from "../core";

type GridRowStartEndVariants = OneThroughTwelve | "13" | "auto";

type RowSpanVariants = OneThroughTwelve | "full";

/**
 * The `row-span` tailwindcss classes, a subset of the `Grid Row Start / End` classes
 * @see https://tailwindcss.com/docs/grid-row
 */
export type RowSpan = "row-auto" | WithVariants<"row-span", RowSpanVariants>;

export interface WithRowSpan {
  /**
   * The `row-span` tailwindcss classes, a subset of the `Grid Row Start / End` classes
   * @see https://tailwindcss.com/docs/grid-row
   */
  rowSpan?: RowSpan;
}

/**
 * The `row-start` tailwindcss classes, a subset of the `Grid Row Start / End` classes
 * @see https://tailwindcss.com/docs/grid-row
 */
export type RowStart = WithVariants<"row-start", GridRowStartEndVariants>;

export interface WithRowStart {
  /**
   * The `row-start` tailwindcss classes, a subset of the `Grid Row Start / End` classes
   * @see https://tailwindcss.com/docs/grid-row
   */
  rowStart?: RowStart;
}

/**
 * The `row-end` tailwindcss classes, a subset of the `Grid Row Start / End` classes
 * @see https://tailwindcss.com/docs/grid-row
 */
export type RowEnd = WithVariants<"row-end", GridRowStartEndVariants>;

export interface WithRowEnd {
  /**
   * The `row-end` tailwindcss classes, a subset of the `Grid Row Start / End` classes
   * @see https://tailwindcss.com/docs/grid-row
   */
  rowEnd?: RowEnd;
}
