import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { composeClassNames as cn } from "@clutchd/compose-props";
import { Flex, IFlexProps } from "@clutchd/flex";
import type { WithMinHeight, WithMinWidth } from "@clutchd/tailwind";
import * as React from "react";

/**
 * Type to define `Page` element.
 */
type IPage = React.ElementRef<typeof Component.div>;

/**
 * Type to define `Page` props.
 */
interface IPageProps extends IFlexProps, WithMinWidth, WithMinHeight {}

/**
 * Type to define `Page` props with html attributes.
 */
interface IPageHtmlProps
  extends IPageProps,
    IComponentPropsWithoutRef<typeof Component.div> {}

/**
 * `Page` - A `Container` designed to contain an entire page. Renders as a `div` element that fills the screen.
 * @param props `IPageHtmlProps` used to render this `Page`.
 * @returns `Page` component.
 */
const Page = React.forwardRef<IPage, IPageHtmlProps>(
  (
    {
      className,
      direction = "flex-col",
      minWidth = "min-w-screen",
      minHeight = "min-h-screen",
      ...props
    },
    forwardedRef,
  ) => {
    return (
      <Flex
        className={cn(minWidth, minHeight, className)}
        direction={direction}
        ref={forwardedRef}
        {...props}
      />
    );
  },
);

Page.displayName = "Page";

export { Page };
export type { IPage, IPageHtmlProps, IPageProps };
