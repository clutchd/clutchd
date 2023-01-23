import { clsx } from "@clutchd/clsx";
import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import {
  getGridCols,
  getGridColsLg,
  getGridColsMd,
  getGridColsSm,
  IWithGapX,
  IWithGapY,
  IWithGridColsValues,
} from "@clutchd/tailwind";
import * as React from "react";

/**
 * Type to define `Grid` element
 */
type IGrid = React.ElementRef<typeof Component.div>;

/**
 * Type to define `Grid` props
 */
interface IGridProps
  extends IWithGapX,
    IWithGapY,
    IWithGridColsValues,
    IComponentPropsWithoutRef<typeof Component.div> {}

/**
 * `Grid` - A primitive grid container that powers various layouts
 * @param props `IGridProps` used to render this `Grid`
 * @returns `Grid` component
 */
const Grid = React.forwardRef<IGrid, IGridProps>(
  (
    {
      className,
      gridCols = 1,
      gridColsSm,
      gridColsMd,
      gridColsLg,
      gapX = "gap-x-0",
      gapY = "gap-y-0",
      ...props
    },
    forwardedRef
  ) => {
    const classNames = clsx(
      "grid h-full w-full",
      getGridCols(1),
      getGridColsSm(gridColsSm),
      getGridColsMd(gridColsMd),
      getGridColsLg(gridColsLg),
      gapX,
      gapY,
      className
    );
    return (
      <Component.div className={classNames} ref={forwardedRef} {...props} />
    );
  }
);

Grid.displayName = "Grid";

export { Grid };
export type { IGrid, IGridProps };
