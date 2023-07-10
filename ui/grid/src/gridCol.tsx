import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { WithColSpan, WithRowSpan } from "@clutchd/tailwind";
import * as React from "react";

/**
 * Type to define `GridCol` element
 */
type IGridCol = React.ElementRef<typeof Component.div>;

/**
 * Type to define `GridCol` props
 */
interface IGridColProps
  extends WithColSpan,
    WithRowSpan,
    IComponentPropsWithoutRef<typeof Component.div> {}

/**
 * `GridCol` - A primitive component used to render a column within a grid
 * @param props `IColProps` used to render this `Col`
 * @returns `Col` component
 */
const GridCol = React.forwardRef<IGridCol, IGridColProps>(
  (
    {
      className,
      colSpan = "col-auto",
      colSpanSm,
      colSpanMd,
      colSpanLg,
      rowSpan,
      rowSpanSm,
      rowSpanMd,
      rowSpanLg,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <Component.div
        className={[
          colSpan,
          colSpanSm,
          colSpanMd,
          colSpanLg,
          rowSpan,
          rowSpanSm,
          rowSpanMd,
          rowSpanLg,
          className,
        ].join(" ")}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

GridCol.displayName = "GridCol";

export { GridCol };
export type { IGridCol, IGridColProps };
