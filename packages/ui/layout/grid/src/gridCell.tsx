import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { composeClassNames as cn } from "@clutchd/compose-props";
import type {
  WithColEnd,
  WithColSpan,
  WithColStart,
  WithRowEnd,
  WithRowSpan,
  WithRowStart,
} from "@clutchd/tailwind";
import * as React from "react";

/**
 * Type to define `GridCell` element
 */
type IGridCell = React.ElementRef<typeof Component.div>;

/**
 * Type to define `GridCell` props
 */
interface IGridCellProps
  extends WithColStart,
    WithColSpan,
    WithColEnd,
    WithRowStart,
    WithRowSpan,
    WithRowEnd {}

/**
 * Type to define `GridCell` props with html attributes
 */
interface IGridCellHtmlProps
  extends IGridCellProps,
    IComponentPropsWithoutRef<typeof Component.div> {}

/**
 * `GridCell` - A primitive component used to render a cell within a grid
 * @param props `IGridCellHtmlProps` used to render this `GridCell`
 * @returns `GridCell` component
 */
const GridCell = React.forwardRef<IGridCell, IGridCellHtmlProps>(
  (
    {
      className,
      colSpan,
      colStart,
      colEnd,
      rowSpan,
      rowStart,
      rowEnd,
      ...props
    },
    forwardedRef,
  ) => {
    return (
      <Component.div
        className={cn(
          colSpan,
          colStart,
          colEnd,
          rowSpan,
          rowStart,
          rowEnd,
          className,
        )}
        ref={forwardedRef}
        {...props}
      />
    );
  },
);

GridCell.displayName = "GridCell";

export { GridCell };
export type { IGridCell, IGridCellHtmlProps, IGridCellProps };
