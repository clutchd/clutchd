import { clsx } from "@clutchd/clsx";
import {
  Component,
  IComponent,
  ReactPropsWithoutRef,
} from "@clutchd/component";
import {
  colSpan as twColSpan,
  colSpanLg as twColSpanLg,
  colSpanMd as twColSpanMd,
  colSpanSm as twColSpanSm,
  rowSpan as twRowSpan,
  rowSpanLg as twRowSpanLg,
  rowSpanMd as twRowSpanMd,
  rowSpanSm as twRowSpanSm,
} from "@clutchd/tailwind";

/**
 * Type to define `Col` component
 */
type ICol = typeof Col;

/**
 * Type to define available columns
 */
type ICols = "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "full";

/**
 * Type to define available columns
 */
type IRows = "auto" | 1 | 2 | 3 | 4 | 5 | 6 | "full";

/**
 * Type to define `Col` props
 */
interface IColProps extends ReactPropsWithoutRef<IComponent["div"]> {
  colSpan?: ICols;
  colSpanSm?: ICols;
  colSpanMd?: ICols;
  colSpanLg?: ICols;
  rowSpan?: IRows;
  rowSpanSm?: IRows;
  rowSpanMd?: IRows;
  rowSpanLg?: IRows;
}

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
    GetCols(colSpan, twColSpan),
    GetCols(colSpanSm, twColSpanSm),
    GetCols(colSpanMd, twColSpanMd),
    GetCols(colSpanLg, twColSpanLg),
    GetRows(rowSpan, twRowSpan),
    GetRows(rowSpanSm, twRowSpanSm),
    GetRows(rowSpanMd, twRowSpanMd),
    GetRows(rowSpanLg, twRowSpanLg),
    className
  );
  return <Component.div {...props} className={classNames} />;
}

/**
 * Helper function to get the proper col span classes based on the `Col` component's props
 */
function GetCols(
  span: ICols | undefined,
  colSpan:
    | readonly [
        "col-auto",
        "col-span-1",
        "col-span-2",
        "col-span-3",
        "col-span-4",
        "col-span-5",
        "col-span-6",
        "col-span-7",
        "col-span-8",
        "col-span-9",
        "col-span-10",
        "col-span-11",
        "col-span-12",
        "col-span-full"
      ]
    | readonly [
        "sm:col-auto",
        "sm:col-span-1",
        "sm:col-span-2",
        "sm:col-span-3",
        "sm:col-span-4",
        "sm:col-span-5",
        "sm:col-span-6",
        "sm:col-span-7",
        "sm:col-span-8",
        "sm:col-span-9",
        "sm:col-span-10",
        "sm:col-span-11",
        "sm:col-span-12",
        "sm:col-span-full"
      ]
    | readonly [
        "md:col-auto",
        "md:col-span-1",
        "md:col-span-2",
        "md:col-span-3",
        "md:col-span-4",
        "md:col-span-5",
        "md:col-span-6",
        "md:col-span-7",
        "md:col-span-8",
        "md:col-span-9",
        "md:col-span-10",
        "md:col-span-11",
        "md:col-span-12",
        "md:col-span-full"
      ]
    | readonly [
        "lg:col-auto",
        "lg:col-span-1",
        "lg:col-span-2",
        "lg:col-span-3",
        "lg:col-span-4",
        "lg:col-span-5",
        "lg:col-span-6",
        "lg:col-span-7",
        "lg:col-span-8",
        "lg:col-span-9",
        "lg:col-span-10",
        "lg:col-span-11",
        "lg:col-span-12",
        "lg:col-span-full"
      ]
    | string[]
): string {
  if (span == null) {
    return "";
  }

  // get underlying value
  var value: number;
  switch (span) {
    case "auto":
      value = 0;
      break;

    case "full":
      value = 13;
      break;

    default:
      value = span as number;
      break;
  }

  return colSpan[value];
}

/**
 * Helper function to get the proper row span classes based on the `Col` component's props
 */
function GetRows(
  span: IRows | undefined,
  rowSpan:
    | readonly [
        "row-auto",
        "row-span-1",
        "row-span-2",
        "row-span-3",
        "row-span-4",
        "row-span-5",
        "row-span-6",
        "row-span-full"
      ]
    | readonly [
        "sm:row-auto",
        "sm:row-span-1",
        "sm:row-span-2",
        "sm:row-span-3",
        "sm:row-span-4",
        "sm:row-span-5",
        "sm:row-span-6",
        "sm:row-span-full"
      ]
    | readonly [
        "md:row-auto",
        "md:row-span-1",
        "md:row-span-2",
        "md:row-span-3",
        "md:row-span-4",
        "md:row-span-5",
        "md:row-span-6",
        "md:row-span-full"
      ]
    | readonly [
        "lg:row-auto",
        "lg:row-span-1",
        "lg:row-span-2",
        "lg:row-span-3",
        "lg:row-span-4",
        "lg:row-span-5",
        "lg:row-span-6",
        "lg:row-span-full"
      ]
    | string[]
): string {
  if (span == null) {
    return "";
  }

  // get underlying value
  var value: number;
  switch (span) {
    case "auto":
      value = 0;
      break;

    case "full":
      value = 7;
      break;

    default:
      value = span as number;
      break;
  }

  return rowSpan[value];
}

export { Col };
export type { ICol, IColProps };
