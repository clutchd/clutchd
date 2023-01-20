import { clsx } from "@clutchd/clsx";
import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import {
  IWithAlignItems,
  IWithFlexDirection,
  IWithJustifyContent,
} from "@clutchd/tailwind";

/**
 * Type to define `Flex` component
 */
type IFlex = typeof Flex;

/**
 * Type to define `Flex` props shared by all `Flex` components
 */
interface IFlexPropsCommon
  extends IWithAlignItems,
    IWithJustifyContent,
    IComponentPropsWithoutRef<typeof Component.div> {}

/**
 * Type to define `Flex` props
 */
interface IFlexProps extends IFlexPropsCommon, IWithFlexDirection {}

/**
 * `Flex` - A primitive flex container that powers various layouts
 * @param props `IFlexProps` used to render this `Flex`
 * @returns `Flex` component
 */
function Flex({
  alignItems,
  className,
  flexDirection,
  justifyContent,
  ...props
}: IFlexProps) {
  const classNames = clsx(
    "flex h-full w-full",
    alignItems,
    flexDirection,
    justifyContent,
    className
  );

  return <Component.div {...props} className={classNames} />;
}

Flex.displayName = "Flex";

export { Flex };
export type { IFlex, IFlexProps, IFlexPropsCommon };
