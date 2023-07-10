import { WithVariants, WithModifier } from "../core";
import { OneThroughTwelve } from "./common";

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
}
