import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { Flex, IFlexProps } from "@clutchd/flex";
import * as React from "react";

/**
 * Type to define `Footer` element
 */
type IFooter = React.ElementRef<typeof Component.footer>;

/**
 * Type to define `Footer` props
 */
interface IFooterProps extends IFlexProps {}

/**
 * `Footer` - A layout component designed to contain a page's footer content. Renders as a `footer` element
 * @param props `IFooterProps` used to render this `Footer`
 * @returns `Footer` component
 */
const Footer = React.forwardRef<
  IFooter,
  IFooterProps & IComponentPropsWithoutRef<typeof Component.footer>
>(
  (
    { children, className, flexDirection = "flex-row", ...props },
    forwardedRef
  ) => {
    return (
      <Flex
        asChild
        className={["p-6 sm:p-8", className].join(" ")}
        flexDirection={flexDirection}
        {...props}
      >
        <footer ref={forwardedRef}>{children}</footer>
      </Flex>
    );
  }
);

Footer.displayName = "Footer";

export { Footer };
export type { IFooter, IFooterProps };
