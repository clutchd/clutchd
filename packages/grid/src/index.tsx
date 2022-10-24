import { Col, ICol, IColProps } from "./col";
import {
  Grid as InternalGrid,
  IGrid as IInternalGrid,
  IGridProps as IInternalGridProps,
} from "./grid";

/**
 * Type to define `Grid` component
 */
type IGrid = IInternalGrid & {
  Col: ICol;
};

/**
 * Type to define `Grid` props
 */
interface IGridProps extends IInternalGridProps {
  IColProps: IColProps;
}

/**
 * `Grid` - A primitive grid container that powers various layouts
 */
const Grid: IGrid = InternalGrid as IGrid;
Grid.Col = Col;

export { Grid };
export type { IGrid, IGridProps };
