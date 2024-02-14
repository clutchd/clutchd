import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { composeClassNames as cn } from "@clutchd/compose-props";
import type { Display, WithGridCols, WithGridRows } from "@clutchd/tailwind";
import * as React from "react";

/**
 * Type to define `Grid` element
 */
type IGrid = React.ElementRef<typeof Component.div>;

/**
 * Type to define `Grid` props
 */
interface IGridProps extends WithGridCols, WithGridRows {
  display?: Extract<Display, "grid" | "inline-grid" | "hidden">;
}

/**
 * Type to define `Grid` props with html attributes
 */
interface IGridHtmlProps
  extends IGridProps,
    IComponentPropsWithoutRef<typeof Component.div> {}

/**
 * `Grid` - A primitive grid container that powers various layouts
 * @param props `IGridHtmlProps` used to render this `Grid`
 * @returns `Grid` component
 */
const Grid = React.forwardRef<IGrid, IGridHtmlProps>(
  (
    {
      className,
      display = "grid",
      gridCols,
      gridColsSm,
      gridColsMd,
      gridColsLg,
      gridColsXl,
      gridCols2xl,
      gridRows,
      gridRowsSm,
      gridRowsMd,
      gridRowsLg,
      gridRowsXl,
      gridRows2xl,
      ...props
    },
    forwardedRef,
  ) => {
    return (
      <Component.div
        className={cn(
          display,
          gridCols,
          gridColsSm,
          gridColsMd,
          gridColsLg,
          gridColsXl,
          gridCols2xl,
          gridRows,
          gridRowsSm,
          gridRowsMd,
          gridRowsLg,
          gridRowsXl,
          gridRows2xl,
          className,
        )}
        ref={forwardedRef}
        {...props}
      />
    );
  },
);

Grid.displayName = "Grid";

export { Grid };
export type { IGrid, IGridHtmlProps, IGridProps };
