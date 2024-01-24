import { WithModifier, WithVariants, OneThroughTwelve } from "../core";

/**
 * Grid Row Start / End
 * @see https://tailwindcss.com/docs/grid-row
 */

type GridRowStartEndVariants = OneThroughTwelve | "13" | "auto";

/**
 * Row Span
 */

type RowSpanVariants = OneThroughTwelve | "full";

export type RowSpan = "row-auto" | WithVariants<"row-span", RowSpanVariants>;

export interface WithRowSpan {
  rowSpan?: RowSpan;
  rowSpanSm?: WithModifier<"sm", RowSpan>;
  rowSpanMd?: WithModifier<"md", RowSpan>;
  rowSpanLg?: WithModifier<"lg", RowSpan>;
  rowSpanXl?: WithModifier<"xl", RowSpan>;
  rowSpan2xl?: WithModifier<"2xl", RowSpan>;
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
