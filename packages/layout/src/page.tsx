import { clsx } from "@clutchd/clsx";
import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { ILayoutWithDirection, Layout } from "./layout";
import * as React from "react";

/**
 * Type to define `Page` element
 */
type IPage = React.ElementRef<typeof Component.div>;

/**
 * Type to define `Page` props
 */
interface IPageProps
  extends ILayoutWithDirection,
    IComponentPropsWithoutRef<typeof Component.div> {}

/**
 * `Page` - A `Container` designed to contain an entire page. Renders as a `div` element that fills the screen
 * @param props `IPageProps` used to render this `Page`
 * @returns `Page` component
 */
const Page = React.forwardRef<IPage, IPageProps>(
  ({ className, direction = "col", ...props }, forwardedRef) => {
    return (
      <Layout
        className={clsx(
          "min-h-screen min-w-screen subpixel-antialiased",
          className
        )}
        direction={direction}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

Page.displayName = "Page";

export { Page };
export type { IPage, IPageProps };
