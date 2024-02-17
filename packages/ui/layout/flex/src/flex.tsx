import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { composeClassNames as cn } from "@clutchd/compose-props";
import type {
  AlignItems,
  Display,
  FlexDirection,
  FlexWrap,
  JustifyContent,
} from "@clutchd/tailwind";
import * as React from "react";

/**
 * Type to define `Flex` element
 */
type IFlex = React.ElementRef<typeof Component.div>;

/**
 * Type to define `Flex` props
 */
interface IFlexProps {
  /**
   * A subset of the tailwind display classes
   * @see https://tailwindcss.com/docs/display
   */
  display?: Extract<Display, "flex" | "inline-flex" | "hidden">;
  /**
   * The tailwind flex direction classes
   * @see https://tailwindcss.com/docs/flex-direction
   */
  direction?: FlexDirection;
  /**
   * The tailwind align items classes
   * @see https://tailwindcss.com/docs/align-items
   */
  align?: AlignItems;
  /**
   * The tailwind justify content classes
   * @see https://tailwindcss.com/docs/justify-content
   */
  justify?: JustifyContent;
  /**
   * The tailwind flex wrap classes
   * @see https://tailwindcss.com/docs/flex-wrap
   */
  wrap?: FlexWrap;
}

/**
 * Type to define `Flex` props with html attributes
 */
interface IFlexHtmlProps
  extends IFlexProps,
    IComponentPropsWithoutRef<typeof Component.div> {}

/**
 * `Flex` - A flex container that powers various layouts
 * @param props `IFlexHtmlProps` used to render this `Flex`
 * @returns `Flex` component
 */
const Flex = React.forwardRef<IFlex, IFlexHtmlProps>(
  (
    { className, display = "flex", direction, align, justify, wrap, ...props },
    forwardedRef,
  ) => {
    return (
      <Component.div
        className={cn(display, direction, align, justify, wrap, className)}
        ref={forwardedRef}
        {...props}
      />
    );
  },
);

Flex.displayName = "Flex";

export { Flex };
export type { IFlex, IFlexHtmlProps, IFlexProps };
