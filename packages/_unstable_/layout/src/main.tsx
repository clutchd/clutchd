import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { Flex, IFlexProps } from "@clutchd/flex";
import * as React from "react";

/**
 * Type to define `Main` element
 */
type IMain = React.ElementRef<typeof Component.main>;

/**
 * Type to define `Main` props
 */
interface IMainProps extends IFlexProps {}

/**
 * Type to define `Main` props with html attributes
 */
interface IMainHtmlProps
  extends IMainProps,
    IComponentPropsWithoutRef<typeof Component.main> {}

/**
 * `Main` - A layout component designed to contain a page's primary Main. Renders as a `main` element
 * @param props `IMainHtmlProps` used to render this `Main`
 * @returns `Main` component
 */
const Main = React.forwardRef<IMain, IMainHtmlProps>(
  ({ children, flexDirection = "flex-col", ...props }, forwardedRef) => {
    return (
      <Flex asChild flex="flex-1" flexDirection={flexDirection} {...props}>
        <main ref={forwardedRef}>{children}</main>
      </Flex>
    );
  },
);

Main.displayName = "Main";

export { Main };
export type { IMain, IMainProps, IMainHtmlProps };
