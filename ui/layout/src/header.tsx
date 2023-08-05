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
interface IHeaderProps extends IFlexProps { }

/**
 * Type to define `Header` props with html attributes
 */
interface IHeaderHtmlProps
  extends IHeaderProps,
  IComponentPropsWithoutRef<typeof Component.header> { }

/**
 * `Header` - A layout component designed to contain a page's header content. Renders as a `header` element
 * @param props `IHeaderProps` used to render this `Header`
 * @returns `Header` component
 */
const Header = React.forwardRef<IHeader, IHeaderHtmlProps>(
  (
    {
      children,
      className,
      flexDirection = "flex-row",
      justifyContent = "justify-between",
      ...props
    },
    forwardedRef
  ) => {
    return (
      <Flex
        asChild
        className={[className].join(" ")}
        flexDirection={flexDirection}
        justifyContent={justifyContent}
        {...props}
      >
        <header ref={forwardedRef}>{children}</header>
      </Flex>
    );
  }
);

Header.displayName = "Header";

export { Header };
export type { IHeader, IHeaderProps, IHeaderHtmlProps };
