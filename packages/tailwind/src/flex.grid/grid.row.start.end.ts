import { WithModifier, WithVariants } from "..";

/**
 * Grid Row Start / End
 * @see https://tailwindcss.com/docs/grid-row
 */

type GridRowCommonVariants = "1" | "2" | "3" | "4" | "5" | "6";

type GridRowStartEndVariants = GridRowCommonVariants | "7" | "auto";

/**
 * Row Span
 */

export type RowSpanVariants = GridRowCommonVariants | "full";

export type RowSpanNumberVariants = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type RowSpan = "row-auto" | WithVariants<"row-span", RowSpanVariants>;

export interface WithRowSpan {
  rowSpan?: RowSpan | RowSpanNumberVariants;
  rowSpanSm?: WithModifier<"sm", RowSpan> | RowSpanNumberVariants;
  rowSpanMd?: WithModifier<"md", RowSpan> | RowSpanNumberVariants;
  rowSpanLg?: WithModifier<"lg", RowSpan> | RowSpanNumberVariants;
}

/**
 * Row Start
 */

export type RowStart = WithVariants<"row-start", GridRowStartEndVariants>;

export interface WithRowStart {
  rowStart?: RowStart;
}

/**
 * Row End
 */

export type RowEnd = WithVariants<"row-end", GridRowStartEndVariants>;

export interface WithRowEnd {
  rowEnd?: RowEnd;
}
