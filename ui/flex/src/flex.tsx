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
 * Type to define `Flex` props
 */
interface IFlexProps
  extends WithAlignItems,
    WithJustifyContent,
    WithFlexDirection {}

/**
 * Type to define `Flex` props with html attributes
 */
interface IFlexHtmlProps
  extends IFlexProps,
    IComponentPropsWithoutRef<typeof Component.div> {}

/**
 * `Flex` - A primitive flex container that powers various layouts
 * @param props `IFlexProps` used to render this `Flex`
 * @returns `Flex` component
 */
const Flex = React.forwardRef<IFlex, IFlexHtmlProps>(
  (
    {
      alignItems = "items-center",
      className,
      flexDirection = "flex-col",
      justifyContent = "justify-normal",
      ...props
    },
    forwardedRef
  ) => {
    return (
      <Component.div
        className={[
          "flex h-full w-full",
          alignItems,
          flexDirection,
          justifyContent,
          className,
        ].join(" ")}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

Flex.displayName = "Flex";

export { Flex };
export type { IFlex, IFlexProps, IFlexHtmlProps };
