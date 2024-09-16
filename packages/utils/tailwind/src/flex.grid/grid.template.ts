import type { OneThroughTwelve, WithVariants } from "../core";

type GridTemplateVariants = OneThroughTwelve | "none" | "subgrid";

/**
 * The `Grid Template Columns` tailwindcss classes.
 * @see https://tailwindcss.com/docs/grid-template-columns
 */
export type GridCols = WithVariants<"grid-cols", GridTemplateVariants>;

export interface WithGridCols {
  /**
   * The `Grid Template Columns` tailwindcss classes.
   * @see https://tailwindcss.com/docs/grid-template-columns
   */
  gridCols?: GridCols;
}

/**
 * The `Grid Template Rows` tailwindcss classes.
 * @see https://tailwindcss.com/docs/grid-template-rows
 */
export type GridRows = WithVariants<"grid-rows", GridTemplateVariants>;

export interface WithGridRows {
  /**
   * The `Grid Template Rows` tailwindcss classes.
   * @see https://tailwindcss.com/docs/grid-template-rows
   */
  gridRows?: GridRows;
}
