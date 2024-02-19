import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { composeClassNames as cn } from "@clutchd/compose-props";
import type {
  AlignItems,
  Display,
  GridCols,
  GridRows,
  JustifyContent,
} from "@clutchd/tailwind";
import * as React from "react";

/**
 * Type to define `Grid` element
 */
type IGrid = React.ElementRef<typeof Component.div>;

/**
 * Type to define `Grid` props
 */
interface IGridProps {
  /**
   * A subset of the `Display` tailwindcss classes.  Defaults to `grid`.
   * @see https://tailwindcss.com/docs/display
   */
  display?: Extract<Display, "grid" | "inline-grid" | "hidden">;
  /**
   * The `Align Items` tailwindcss classes
   * @see https://tailwindcss.com/docs/align-items
   */
  align?: AlignItems;
  /**
   * The `Justify Content` tailwindcss classes
   * @see https://tailwindcss.com/docs/justify-content
   */
  justify?: JustifyContent;
  /**
   * The `Grid Template Columns` tailwindcss classes
   * @see https://tailwindcss.com/docs/grid-template-columns
   */
  cols?: GridCols;
  /**
   * The `Grid Template Rows` tailwindcss classes
   * @see https://tailwindcss.com/docs/grid-template-rows
   */
  rows?: GridRows;
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
    { className, display = "grid", align, justify, cols, rows, ...props },
    forwardedRef,
  ) => {
    return (
      <Component.div
        className={cn(display, align, justify, cols, rows, className)}
        ref={forwardedRef}
        {...props}
      />
    );
  },
);

Grid.displayName = "Grid";

export { Grid };
export type { IGrid, IGridHtmlProps, IGridProps };
