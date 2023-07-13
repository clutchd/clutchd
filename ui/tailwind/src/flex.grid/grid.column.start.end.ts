import { WithModifier, WithVariants, OneThroughTwelve } from "../core";

/**
 * Grid Column Start / End
 * @see https://tailwindcss.com/docs/grid-column
 */

type GridColStartEndVariants = OneThroughTwelve | "13" | "auto";

/**
 * Col Span
 */

type ColSpanVariants = OneThroughTwelve | "full";

export type ColSpan = "col-auto" | WithVariants<"col-span", ColSpanVariants>;

export interface WithColSpan {
  colSpan?: ColSpan;
  colSpanSm?: WithModifier<"sm", ColSpan>;
  colSpanMd?: WithModifier<"md", ColSpan>;
  colSpanLg?: WithModifier<"lg", ColSpan>;
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
