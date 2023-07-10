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
 * `Main` - A layout component designed to contain a page's primary Main. Renders as a `main` element
 * @param props `IMainProps` used to render this `Main`
 * @returns `Main` component
 */
const Main = React.forwardRef<
  IMain,
  IMainProps & IComponentPropsWithoutRef<typeof Component.main>
>(({ children, className, direction = "col", ...props }, forwardedRef) => {
  return (
    <Flex
      asChild
      className={["flex-1 p-6 sm:p-8", className].join(" ")}
      direction={direction}
      {...props}
    >
      <main ref={forwardedRef}>{children}</main>
    </Flex>
  );
});

Main.displayName = "Main";

export { Main };
export type { IMain, IMainProps };
