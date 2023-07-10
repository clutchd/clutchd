import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { Flex, IFlexProps } from "@clutchd/flex";
import * as React from "react";

/**
 * Type to define `Page` element
 */
type IPage = React.ElementRef<typeof Component.div>;

/**
 * Type to define `Page` props
 */
interface IPageProps extends IFlexProps { }

/**
 * `Page` - A `Container` designed to contain an entire page. Renders as a `div` element that fills the screen
 * @param props `IPageProps` used to render this `Page`
 * @returns `Page` component
 */
const Page = React.forwardRef<
  IPage,
  IPageProps & IComponentPropsWithoutRef<typeof Component.div>
>(({ className, flexDirection = "flex-col", ...props }, forwardedRef) => {
  return (
    <Flex
      className={[
        "min-h-screen min-w-screen subpixel-antialiased",
        className,
      ].join(" ")}
      flexDirection={flexDirection}
      ref={forwardedRef}
      {...props}
    />
  );
});

Page.displayName = "Page";

export { Page };
export type { IPage, IPageProps };
