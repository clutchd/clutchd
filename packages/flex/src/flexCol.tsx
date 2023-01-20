import { clsx } from "@clutchd/clsx";
import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import {
  IWithAlignItems,
  IWithJustifyContent,
  IWithSpaceY,
} from "@clutchd/tailwind";
import { Flex } from "./flex";

/**
 * Type to define `FlexCol` component
 */
type IFlexCol = typeof FlexCol;

/**
 * Type to define `FlexCol` props
 */
interface IFlexColProps
  extends IWithAlignItems,
    IWithJustifyContent,
    IWithSpaceY,
    IComponentPropsWithoutRef<typeof Component.div> {}

/**
 * `FlexCol` - A flex container for a vertical layout
 * @param props `IFlexColProps` used to render this `FlexCol`
 * @returns `FlexCol` component
 */
function FlexCol({
  alignItems,
  className,
  justifyContent,
  spaceY,
  ...props
}: IFlexColProps) {
  const classNames = clsx(spaceY, className);
  return (
    <Flex
      alignItems={alignItems}
      className={classNames}
      justifyContent={justifyContent}
      {...props}
    />
  );
}

FlexCol.displayName = "FlexCol";

export { FlexCol };
export type { IFlexCol, IFlexColProps };
