import { clsx } from "@clutchd/clsx";
import {
  Component,
  IComponent,
  ReactPropsWithoutRef,
} from "@clutchd/component";
import {
  gridCols,
  gridColsLg,
  gridColsMd,
  gridColsSm,
  IWithGapX,
  IWithGapY,
} from "@clutchd/tailwind";

/**
 * Type to define `Grid` component
 */
type IGrid = typeof Grid;

/**
 * Type to define available columns
 */
type ICols = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/**
 * Type to define `Grid` props
 */
interface IGridProps
  extends IWithGapX,
    IWithGapY,
    ReactPropsWithoutRef<IComponent["div"]> {
  cols?: ICols;
  colsSm?: ICols;
  colsMd?: ICols;
  colsLg?: ICols;
}

/**
 * `Grid` - A primitive grid container that powers various layouts
 * @param props `IGridProps` used to render this `Grid`
 * @returns `Grid` component
 */
function Grid({
  className,
  cols = 1,
  colsSm,
  colsMd,
  colsLg,
  gapX = "gap-x-0",
  gapY = "gap-y-0",
  ...props
}: IGridProps) {
  const classNames = clsx(
    "grid h-full w-full",
    GetCols(cols, gridCols),
    GetCols(colsSm, gridColsSm),
    GetCols(colsMd, gridColsMd),
    GetCols(colsLg, gridColsLg),
    gapX,
    gapY,
    className
  );
  return <Component.div {...props} className={classNames} />;
}

/**
 * Helper function to get the proper grid col classes based on the `Grid` component's props
 */
function GetCols(
  num: ICols | undefined,
  gridCols:
    | readonly [
        "grid-cols-none",
        "grid-cols-1",
        "grid-cols-2",
        "grid-cols-3",
        "grid-cols-4",
        "grid-cols-5",
        "grid-cols-6",
        "grid-cols-7",
        "grid-cols-8",
        "grid-cols-9",
        "grid-cols-10",
        "grid-cols-11",
        "grid-cols-12"
      ]
    | readonly [
        "sm:grid-cols-none",
        "sm:grid-cols-1",
        "sm:grid-cols-2",
        "sm:grid-cols-3",
        "sm:grid-cols-4",
        "sm:grid-cols-5",
        "sm:grid-cols-6",
        "sm:grid-cols-7",
        "sm:grid-cols-8",
        "sm:grid-cols-9",
        "sm:grid-cols-10",
        "sm:grid-cols-11",
        "sm:grid-cols-12"
      ]
    | readonly [
        "md:grid-cols-none",
        "md:grid-cols-1",
        "md:grid-cols-2",
        "md:grid-cols-3",
        "md:grid-cols-4",
        "md:grid-cols-5",
        "md:grid-cols-6",
        "md:grid-cols-7",
        "md:grid-cols-8",
        "md:grid-cols-9",
        "md:grid-cols-10",
        "md:grid-cols-11",
        "md:grid-cols-12"
      ]
    | readonly [
        "lg:grid-cols-none",
        "lg:grid-cols-1",
        "lg:grid-cols-2",
        "lg:grid-cols-3",
        "lg:grid-cols-4",
        "lg:grid-cols-5",
        "lg:grid-cols-6",
        "lg:grid-cols-7",
        "lg:grid-cols-8",
        "lg:grid-cols-9",
        "lg:grid-cols-10",
        "lg:grid-cols-11",
        "lg:grid-cols-12"
      ]
): string {
  if (num == null) {
    return "";
  }

  return gridCols[num];
}

export { Grid };
export type { IGrid, IGridProps };
