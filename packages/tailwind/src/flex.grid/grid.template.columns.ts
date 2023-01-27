import { WithModifier, WithVariants } from "..";

/**
 * Grid Template Columns
 * @see https://tailwindcss.com/docs/grid-template-columns
 */

export type GridColsVariants =
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
  | "12"
  | "none";

export type GridColsNumberVariants =
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
  | 12;

export type GridCols = WithVariants<"grid-cols", GridColsVariants>;

export interface WithGridCols {
  gridCols?: GridCols | GridColsNumberVariants;
  gridColsSm?: WithModifier<"sm", GridCols> | GridColsNumberVariants;
  gridColsMd?: WithModifier<"md", GridCols> | GridColsNumberVariants;
  gridColsLg?: WithModifier<"lg", GridCols> | GridColsNumberVariants;
}
