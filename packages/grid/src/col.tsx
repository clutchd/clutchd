import { clsx } from "@clutchd/clsx";
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
  IWithColSpanValues,
  IWithRowSpanValues,
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
  extends IWithColSpanValues,
    IWithRowSpanValues,
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
    const classNames = clsx(
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
