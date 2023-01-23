import { clsx } from "@clutchd/clsx";
import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import * as React from "react";
import { ILayoutWithDirection, ILayoutWithPadding, Layout } from "./layout";

/**
 * Type to define `Header` element
 */
type IHeader = React.ElementRef<typeof Component.header>;

/**
 * Type to define `Header` props
 */
interface IHeaderProps
  extends ILayoutWithDirection,
    ILayoutWithPadding,
    IComponentPropsWithoutRef<typeof Component.header> {}

/**
 * `Header` - A layout component designed to contain a page's header content. Renders as a `header` element
 * @param props `IHeaderProps` used to render this `Header`
 * @returns `Header` component
 */
const Header = React.forwardRef<IHeader, IHeaderProps>(
  (
    { children, className, direction = "row", padding = true, ...props },
    forwardedRef
  ) => {
    return (
      <Layout
        asChild
        className={clsx(padding ? "p-6 sm:p-8" : "", className)}
        direction={direction}
        {...props}
      >
        <header ref={forwardedRef}>{children}</header>
      </Layout>
    );
  }
);

Header.displayName = "Header";

export { Header };
export type { IHeader, IHeaderProps };
