import { WithVariants, WithModifier, OneThroughTwelve } from "../core";

/**
 * Grid Template Columns
 * @see https://tailwindcss.com/docs/grid-template-columns
 */

type GridColsVariants = OneThroughTwelve | "none";

export type GridCols = WithVariants<"grid-cols", GridColsVariants>;

export interface WithGridCols {
  gridCols?: GridCols;
  gridColsSm?: WithModifier<"sm", GridCols>;
  gridColsMd?: WithModifier<"md", GridCols>;
  gridColsLg?: WithModifier<"lg", GridCols>;
  gridColsXl?: WithModifier<"xl", GridCols>;
  gridCols2xl?: WithModifier<"2xl", GridCols>;
}
