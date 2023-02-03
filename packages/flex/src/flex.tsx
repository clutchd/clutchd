import { twx } from "@clutchd/twx";
import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import {
  WithAlignItems,
  WithFlexDirection,
  WithJustifyContent,
} from "@clutchd/tailwind";
import * as React from "react";

/**
 * Type to define `Flex` element
 */
type IFlex = React.ElementRef<typeof Component.div>;

/**
 * Type to define common props used by all `Flex` components
 */
interface IFlexPropsCommon
  extends WithAlignItems,
    WithJustifyContent,
    IComponentPropsWithoutRef<typeof Component.div> {}

/**
 * Type to define `Flex` props
 */
interface IFlexProps extends IFlexPropsCommon, WithFlexDirection {}

/**
 * `Flex` - A primitive flex container that powers various layouts
 * @param props `IFlexProps` used to render this `Flex`
 * @returns `Flex` component
 */
const Flex = React.forwardRef<IFlex, IFlexProps>(
  (
    { alignItems, className, flexDirection, justifyContent, ...props },
    forwardedRef
  ) => {
    return (
      <Component.div
        className={twx(
          "flex h-full w-full",
          alignItems,
          flexDirection,
          justifyContent,
          className
        )}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

Flex.displayName = "Flex";

export { Flex };
export type { IFlex, IFlexProps, IFlexPropsCommon };
