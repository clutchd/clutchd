import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { Flex, IFlexProps } from "@clutchd/flex";
import * as React from "react";

/**
 * Type to define `Header` element
 */
type IHeader = React.ElementRef<typeof Component.header>;

/**
 * Type to define `Header` props
 */
interface IHeaderProps extends IFlexProps {}

/**
 * `Header` - A layout component designed to contain a page's header content. Renders as a `header` element
 * @param props `IHeaderProps` used to render this `Header`
 * @returns `Header` component
 */
const Header = React.forwardRef<
  IHeader,
  IHeaderProps & IComponentPropsWithoutRef<typeof Component.header>
>(({ children, className, direction = "row", ...props }, forwardedRef) => {
  return (
    <Flex
      asChild
      className={["p-6 sm:p-8", className].join(" ")}
      direction={direction}
      {...props}
    >
      <header ref={forwardedRef}>{children}</header>
    </Flex>
  );
});

Header.displayName = "Header";

export { Header };
export type { IHeader, IHeaderProps };
