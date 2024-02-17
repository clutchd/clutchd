import { OneThroughTwelve, WithVariants } from "../core";

type GridColStartEndVariants = OneThroughTwelve | "13" | "auto";

type ColSpanVariants = OneThroughTwelve | "full";

/**
 * The `col-span` tailwindcss classes, a subset of the `Grid Column Start / End` classes
 * @see https://tailwindcss.com/docs/grid-column
 */
export type ColSpan = "col-auto" | WithVariants<"col-span", ColSpanVariants>;

export interface WithColSpan {
  /**
   * The `col-span` tailwindcss classes, a subset of the `Grid Column Start / End` classes
   * @see https://tailwindcss.com/docs/grid-column
   */
  colSpan?: ColSpan;
}

/**
 * The `col-start` tailwindcss classes, a subset of the `Grid Column Start / End` classes
 * @see https://tailwindcss.com/docs/grid-column
 */
export type ColStart = WithVariants<"col-start", GridColStartEndVariants>;

export interface WithColStart {
  /**
   * The `col-start` tailwindcss classes, a subset of the `Grid Column Start / End` classes
   * @see https://tailwindcss.com/docs/grid-column
   */
  colStart?: ColStart;
}

/**
 * The `col-end` tailwindcss classes, a subset of the `Grid Column Start / End` classes
 * @see https://tailwindcss.com/docs/grid-column
 */
export type ColEnd = WithVariants<"col-end", GridColStartEndVariants>;

export interface WithColEnd {
  /**
   * The `col-end` tailwindcss classes, a subset of the `Grid Column Start / End` classes
   * @see https://tailwindcss.com/docs/grid-column
   */
  colEnd?: ColEnd;
}
