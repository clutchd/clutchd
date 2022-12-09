import { clsx } from "@clutchd/clsx";
import {
  Component,
  IComponent,
  ReactPropsWithoutRef
} from "@clutchd/component";
import { GetGridCols, GetGridColsLg, GetGridColsMd, GetGridColsSm, IWithGapX, IWithGapY, IWithGridColsValues } from "@clutchd/tailwind";

/**
 * Type to define `Grid` component
 */
type IGrid = typeof Grid;

/**
 * Type to define `Grid` props
 */
interface IGridProps
  extends IWithGapX,
  IWithGapY,
  IWithGridColsValues,
  ReactPropsWithoutRef<IComponent["div"]> { }

/**
 * `Grid` - A primitive grid container that powers various layouts
 * @param props `IGridProps` used to render this `Grid`
 * @returns `Grid` component
 */
function Grid({
  className,
  gridCols = 1,
  gridColsSm,
  gridColsMd,
  gridColsLg,
  gapX = "gap-x-0",
  gapY = "gap-y-0",
  ...props
}: IGridProps) {
  const classNames = clsx(
    "grid h-full w-full",
    GetGridCols(1),
    GetGridColsSm(gridColsSm),
    GetGridColsMd(gridColsMd),
    GetGridColsLg(gridColsLg),
    gapX,
    gapY,
    className
  );
  return <Component.div {...props} className={classNames} />;
}

export { Grid };
export type { IGrid, IGridProps };
