import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import * as React from "react";

/**
 * Type to define `Button` component
 */
type IButton = React.ElementRef<typeof Component.button>;

/**
 * Type to define `Button` props
 */
interface IButtonProps {}

/**
 * Type to define `Button` props with html attributes
 */
interface IButtonHtmlProps
  extends IButtonProps,
    IComponentPropsWithoutRef<typeof Component.button> {}

/**
 * `Button` - A button component used to render consistent buttons
 * @param props `IButtonHtmlProps` used to render this `Button`
 * @returns `Button` component
 */
const Button = React.forwardRef<IButton, IButtonHtmlProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <Component.button
        className={[
          "cursor-pointer focus:outline-2 focus:outline-blue-500 focus:outline-offset-4",
          className,
        ].join(" ")}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { IButton, IButtonProps, IButtonHtmlProps };
