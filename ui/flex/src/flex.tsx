import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { composeClassNames as cn } from "@clutchd/compose-props";
import {
  WithAlignItems,
  WithFlex,
  WithFlexBasis,
  WithFlexDirection,
  WithFlexGrow,
  WithFlexShrink,
  WithFlexWrap,
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
    WithFlex,
    WithFlexBasis,
    WithFlexDirection,
    WithFlexGrow,
    WithFlexShrink,
    WithFlexWrap,
    WithJustifyContent {}

/**
 * Type to define `Flex` props with html attributes
 */
interface IFlexHtmlProps
  extends IFlexProps,
    IComponentPropsWithoutRef<typeof Component.div> {}

/**
 * `Flex` - A primitive flex container that powers various layouts
 * @param props `IFlexHtmlProps` used to render this `Flex`
 * @returns `Flex` component
 */
const Flex = React.forwardRef<IFlex, IFlexHtmlProps>(
  (
    {
      alignItems,
      className,
      flex,
      flexBasis,
      flexDirection = "flex-col",
      flexGrow,
      flexShrink,
      flexWrap = "flex-wrap",
      justifyContent,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <Component.div
        className={cn(
          "flex",
          alignItems,
          flex,
          flexBasis,
          flexDirection,
          flexGrow,
          flexShrink,
          flexWrap,
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
export type { IFlex, IFlexProps, IFlexHtmlProps };
