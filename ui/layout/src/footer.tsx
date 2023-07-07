import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { ILayoutWithDirection, Layout } from "./layout";
import * as React from "react";

/**
 * Type to define `Footer` element
 */
type IFooter = React.ElementRef<typeof Component.footer>;

/**
 * Type to define `Footer` props
 */
interface IFooterProps
  extends ILayoutWithDirection,
    IComponentPropsWithoutRef<typeof Component.footer> {}

/**
 * `Footer` - A layout component designed to contain a page's footer content. Renders as a `footer` element
 * @param props `IFooterProps` used to render this `Footer`
 * @returns `Footer` component
 */
const Footer = React.forwardRef<IFooter, IFooterProps>(
  ({ children, className, direction = "row", ...props }, forwardedRef) => {
    return (
      <Layout
        asChild
        className={["p-6 sm:p-8", className].filter(Boolean).join(" ")}
        direction={direction}
        {...props}
      >
        <footer ref={forwardedRef}>{children}</footer>
      </Layout>
    );
  }
);

Footer.displayName = "Footer";

export { Footer };
export type { IFooter, IFooterProps };
