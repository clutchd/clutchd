import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { composeClassNames as cn } from "@clutchd/compose-props";
import type {
  ColEnd,
  ColSpan,
  ColStart,
  RowEnd,
  RowSpan,
  RowStart,
} from "@clutchd/tailwind";
import * as React from "react";

/**
 * Type to define `GridCell` element
 */
type IGridCell = React.ElementRef<typeof Component.div>;

/**
 * Type to define `GridCell` props
 */
interface IGridCellProps {
  /**
   * The tailwind col start classes, a subset of the grid column start / end classes
   * @see https://tailwindcss.com/docs/grid-column
   */
  colStart?: ColStart;
  /**
   * The tailwind col span classes, a subset of the grid column start / end classes
   * @see https://tailwindcss.com/docs/grid-column
   */
  colSpan?: ColSpan;
  /**
   * The tailwind col end classes, a subset of the grid column start / end classes
   * @see https://tailwindcss.com/docs/grid-column
   */
  colEnd?: ColEnd;
  /**
   * The tailwind row start classes, a subset of the grid row start / end classes
   * @see https://tailwindcss.com/docs/grid-row
   */
  rowStart?: RowStart;
  /**
   * The tailwind row span classes, a subset of the grid row start / end classes
   * @see https://tailwindcss.com/docs/grid-row
   */
  rowSpan?: RowSpan;
  /**
   * The tailwind row end classes, a subset of the grid row start / end classes
   * @see https://tailwindcss.com/docs/grid-row
   */
  rowEnd?: RowEnd;
}

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
