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
 * Type to define `GridCol` props with html attributes
 */
interface IGridColHtmlProps
  extends IGridColProps,
    IComponentPropsWithoutRef<typeof Component.div> {}

/**
 * `GridCol` - A primitive component used to render a column within a grid
 * @param props `IGridColHtmlProps` used to render this `Col`
 * @returns `Col` component
 */
const GridCol = React.forwardRef<IGridCol, IGridColHtmlProps>(
  (
    {
      className,
      colSpan = "col-auto",
      colSpanSm,
      colSpanMd,
      colSpanLg,
      colSpanXl,
      colSpan2xl,
      rowSpan,
      rowSpanSm,
      rowSpanMd,
      rowSpanLg,
      rowSpanXl,
      rowSpan2xl,
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
          colSpanXl,
          colSpan2xl,
          rowSpan,
          rowSpanSm,
          rowSpanMd,
          rowSpanLg,
          rowSpanXl,
          rowSpan2xl,
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
export type { IGridCol, IGridColProps, IGridColHtmlProps };
