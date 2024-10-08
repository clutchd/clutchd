import { Component } from "@clutchd/component";
import { composeClassNames as cn } from "@clutchd/compose-props";
import * as React from "react";
import { disabled, focus } from ".";

/**
 * Type to define `Button` component.
 */
type IButton = React.ElementRef<typeof Component.button>;

/**
 * Type to define `Button` props with html attributes.
 */
interface IButtonHtmlProps
  extends React.ComponentPropsWithoutRef<typeof Component.button> {}

/**
 * `CoreButton` - The core button component used to render consistent buttons.
 * @param props `IButtonHtmlProps` used to render this `Button`.
 * @returns `Button` component.
 */
const CoreButton = React.forwardRef<IButton, IButtonHtmlProps>(
  ({ ...props }, forwardedRef) => {
    return <Component.button ref={forwardedRef} {...props} />;
  },
);

CoreButton.displayName = "CoreButton";

/**
 * `Button` - A button component used to render consistent buttons.
 * @param props `IButtonHtmlProps` used to render this `Button`.
 * @returns `Button` component.
 */
const Button = React.forwardRef<IButton, IButtonHtmlProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <CoreButton
        className={cn(disabled, focus, className)}
        ref={forwardedRef}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, CoreButton };
export type { IButton, IButtonHtmlProps };
