import { WithVariants, WithModifier, OneThroughTwelve } from "../core";

/**
 * Grid Template Columns
 * @see https://tailwindcss.com/docs/grid-template-columns
 */

type GridTemplateVariants = OneThroughTwelve | "none" | "subgrid";

export type GridCols = WithVariants<"grid-cols", GridTemplateVariants>;

export interface WithGridCols {
  gridCols?: GridCols;
  gridColsSm?: WithModifier<"sm", GridCols>;
  gridColsMd?: WithModifier<"md", GridCols>;
  gridColsLg?: WithModifier<"lg", GridCols>;
  gridColsXl?: WithModifier<"xl", GridCols>;
  gridCols2xl?: WithModifier<"2xl", GridCols>;
}

/**
 * Grid Template Rows
 * @see https://tailwindcss.com/docs/grid-template-rows
 */

export type GridRows = WithVariants<"grid-rows", GridTemplateVariants>;

export interface WithGridRows {
  gridRows?: GridRows;
  gridRowsSm?: WithModifier<"sm", GridRows>;
  gridRowsMd?: WithModifier<"md", GridRows>;
  gridRowsLg?: WithModifier<"lg", GridRows>;
  gridRowsXl?: WithModifier<"xl", GridRows>;
  gridRows2xl?: WithModifier<"2xl", GridRows>;
}
