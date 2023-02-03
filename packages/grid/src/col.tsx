import { twx } from "@clutchd/twx";
import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import {
  getColSpan,
  getColSpanLg,
  getColSpanMd,
  getColSpanSm,
  getRowSpan,
  getRowSpanLg,
  getRowSpanMd,
  getRowSpanSm,
  WithColSpan,
  WithRowSpan,
} from "@clutchd/tailwind";
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
      colSpan = 1,
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
    const classNames = twx(
      getColSpan(colSpan),
      getColSpanSm(colSpanSm),
      getColSpanMd(colSpanMd),
      getColSpanLg(colSpanLg),
      getRowSpan(rowSpan),
      getRowSpanSm(rowSpanSm),
      getRowSpanMd(rowSpanMd),
      getRowSpanLg(rowSpanLg),
      className
    );
    return (
      <Component.div className={classNames} ref={forwardedRef} {...props} />
    );
  }
);

GridCol.displayName = "GridCol";

export { GridCol };
export type { IGridCol, IGridColProps };
