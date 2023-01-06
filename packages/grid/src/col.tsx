import { clsx } from "@clutchd/clsx";
import {
  Component,
  IComponent,
  ReactPropsWithoutRef,
} from "@clutchd/component";
import {
  GetColSpan,
  GetColSpanLg,
  GetColSpanMd,
  GetColSpanSm,
  GetRowSpan,
  GetRowSpanLg,
  GetRowSpanMd,
  GetRowSpanSm,
  IWithColSpanValues,
  IWithRowSpanValues,
} from "@clutchd/tailwind";

/**
 * Type to define `Col` component
 */
type ICol = typeof Col;

/**
 * Type to define `Col` props
 */
interface IColProps
  extends IWithColSpanValues,
    IWithRowSpanValues,
    ReactPropsWithoutRef<IComponent["div"]> {}

/**
 * `Col` - A primitive component used to render a column within a grid
 * @param props `IColProps` used to render this `Col`
 * @returns `Col` component
 */
function Col({
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
}: IColProps) {
  const classNames = clsx(
    GetColSpan(colSpan),
    GetColSpanSm(colSpanSm),
    GetColSpanMd(colSpanMd),
    GetColSpanLg(colSpanLg),
    GetRowSpan(rowSpan),
    GetRowSpanSm(rowSpanSm),
    GetRowSpanMd(rowSpanMd),
    GetRowSpanLg(rowSpanLg),
    className
  );
  return <Component.div {...props} className={classNames} />;
}

Col.displayName = "GridCol";

export { Col };
export type { ICol, IColProps };
