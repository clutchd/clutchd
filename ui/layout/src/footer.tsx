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
 * Type to define `Footer` props with html attributes
 */
interface IFooterHtmlProps
  extends IFooterProps,
    IComponentPropsWithoutRef<typeof Component.footer> {}

/**
 * `Footer` - A layout component designed to contain a page's footer content. Renders as a `footer` element
 * @param props `IFooterProps` used to render this `Footer`
 * @returns `Footer` component
 */
const Footer = React.forwardRef<IFooter, IFooterHtmlProps>(
  (
    {
      children,
      flexDirection = "flex-row",
      justifyContent = "justify-between",
      ...props
    },
    forwardedRef
  ) => {
    return (
      <Flex
        asChild
        flexDirection={flexDirection}
        justifyContent={justifyContent}
        {...props}
      >
        <footer ref={forwardedRef}>{children}</footer>
      </Flex>
    );
  }
);

Footer.displayName = "Footer";

export { Footer };
export type { IFooter, IFooterProps, IFooterHtmlProps };
