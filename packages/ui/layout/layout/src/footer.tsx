import { Component } from "@clutchd/component";
import { Flex, IFlexProps } from "@clutchd/flex";
import * as React from "react";

/**
 * Type to define `Footer` element.
 */
type IFooter = React.ElementRef<typeof Component.footer>;

/**
 * Type to define `Footer` props.
 */
interface IFooterProps extends IFlexProps {}

/**
 * Type to define `Footer` props with html attributes.
 */
interface IFooterHtmlProps
  extends IFooterProps,
    React.ComponentPropsWithoutRef<typeof Component.footer> {}

/**
 * `Footer` - A layout component designed to contain a page's footer content. Renders as a `footer` element.
 * @param props `IFooterHtmlProps` used to render this `Footer`.
 * @returns `Footer` component.
 */
const Footer = React.forwardRef<IFooter, IFooterHtmlProps>(
  (
    { children, direction = "flex-row", justify = "justify-between", ...props },
    forwardedRef,
  ) => {
    return (
      <Flex asChild direction={direction} justify={justify} {...props}>
        <footer ref={forwardedRef}>{children}</footer>
      </Flex>
    );
  },
);

Footer.displayName = "Footer";

export { Footer };
export type { IFooter, IFooterHtmlProps, IFooterProps };
