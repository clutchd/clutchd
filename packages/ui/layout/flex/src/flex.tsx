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
 * Type to define `Flex` element.
 */
type IFlex = React.ElementRef<typeof Component.div>;

/**
 * Type to define `Flex` props.
 */
interface IFlexProps {
  /**
   * A subset of the `Display` tailwindcss classes.  Defaults to `flex`.
   * @see https://tailwindcss.com/docs/display
   */
  display?: Extract<Display, "flex" | "inline-flex" | "hidden">;
  /**
   * The `Flex Direction` tailwindcss classes.
   * @see https://tailwindcss.com/docs/flex-direction
   */
  direction?: FlexDirection;
  /**
   * The `Align Items` tailwindcss classes.
   * @see https://tailwindcss.com/docs/align-items
   */
  align?: AlignItems;
  /**
   * The `Justify Content` tailwindcss classes.
   * @see https://tailwindcss.com/docs/justify-content
   */
  justify?: JustifyContent;
  /**
   * The `Flex Wrap` tailwindcss classes.
   * @see https://tailwindcss.com/docs/flex-wrap
   */
  wrap?: FlexWrap;
}

/**
 * Type to define `Flex` props with html attributes.
 */
interface IFlexHtmlProps
  extends IFlexProps,
    IComponentPropsWithoutRef<typeof Component.div> {}

/**
 * `Flex` - A flex container that powers various layouts.
 * @param props `IFlexHtmlProps` used to render this `Flex`.
 * @returns `Flex` component.
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
