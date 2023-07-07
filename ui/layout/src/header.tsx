import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import * as React from "react";
import { ILayoutWithDirection, Layout } from "./layout";

/**
 * Type to define `Header` element
 */
type IHeader = React.ElementRef<typeof Component.header>;

/**
 * Type to define `Header` props
 */
interface IHeaderProps
  extends ILayoutWithDirection,
    IComponentPropsWithoutRef<typeof Component.header> {}

/**
 * `Header` - A layout component designed to contain a page's header content. Renders as a `header` element
 * @param props `IHeaderProps` used to render this `Header`
 * @returns `Header` component
 */
const Header = React.forwardRef<IHeader, IHeaderProps>(
  ({ children, className, direction = "row", ...props }, forwardedRef) => {
    return (
      <Layout
        asChild
        className={["p-6 sm:p-8", className].filter(Boolean).join(" ")}
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
