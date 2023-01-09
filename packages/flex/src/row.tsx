import { clsx } from "@clutchd/clsx";
import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import {
  IWithAlignItems,
  IWithJustifyContent,
  IWithSpaceX,
} from "@clutchd/tailwind";
import { Flex } from "./flex";

/**
 * Type to define `Row` component
 */
type IRow = typeof Row;

/**
 * Type to define `Row` props
 */
interface IRowProps
  extends IWithAlignItems,
    IWithJustifyContent,
    IWithSpaceX,
    IComponentPropsWithoutRef<typeof Component.div> {}

/**
 * `Row` - A flex container for a horizontal layout
 * @param props `IRowProps` used to render this `Row`
 * @returns `Row` component
 */
function Row({
  alignItems,
  className,
  justifyContent,
  spaceX,
  ...props
}: IRowProps) {
  const classNames = clsx(spaceX, className);
  return (
    <Flex
      alignItems={alignItems}
      className={classNames}
      flexDirection="flex-row"
      justifyContent={justifyContent}
      {...props}
    />
  );
}

Row.displayName = "FlexRow";

export { Row };
export type { IRow, IRowProps };
