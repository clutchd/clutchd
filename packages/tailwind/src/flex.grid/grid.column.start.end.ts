import { WithModifier, WithVariants } from "..";

/**
 * Grid Column Start / End
 * @see https://tailwindcss.com/docs/grid-column
 */

type GridColCommonVariants =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";

type GridColStartEndVariants = GridColCommonVariants | "13" | "auto";

/**
 * Col Span
 */

export type ColSpanVariants = GridColCommonVariants | "full";

export type ColSpanNumberVariants =
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
  | 12
  | 13;

export type ColSpan = "col-auto" | WithVariants<"col-span", ColSpanVariants>;

export interface WithColSpan {
  colSpan?: ColSpan | ColSpanNumberVariants;
  colSpanSm?: WithModifier<"sm", ColSpan> | ColSpanNumberVariants;
  colSpanMd?: WithModifier<"md", ColSpan> | ColSpanNumberVariants;
  colSpanLg?: WithModifier<"lg", ColSpan> | ColSpanNumberVariants;
}

/**
 * Col Start
 */

export type ColStart = WithVariants<"col-start", GridColStartEndVariants>;

export interface WithColStart {
  colStart?: ColStart;
}

/**
 * Col End
 */

export type ColEnd = WithVariants<"col-end", GridColStartEndVariants>;

export interface WithColEnd {
  colEnd?: ColEnd;
}
