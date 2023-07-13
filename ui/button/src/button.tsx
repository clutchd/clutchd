import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { Link } from "@clutchd/link";
import * as React from "react";

/**
 * Type to define `Button` component
 */
type IButton = React.ElementRef<typeof Component.button>;

/**
 * Type to define `Button` props
 */
interface IButtonProps {
  href?: string;
}

/**
 * Type to define `Button` props with html attributes
 */
interface IButtonHtmlProps
  extends IButtonProps,
    IComponentPropsWithoutRef<typeof Component.button> {}

/**
 * `Button` - A button component used to render consistent buttons
 * @param props `IButtonProps` used to render this `Button`
 * @returns `Button` component
 */
const Button = React.forwardRef<IButton, IButtonHtmlProps>(
  ({ className, href, ...props }, forwardedRef) => {
    if (href) {
      return (
        <Component.button
          asChild
          className={className}
          ref={forwardedRef}
          {...props}
        >
          <Link href={href} />
        </Component.button>
      );
    }

    return (
      <Component.button className={className} ref={forwardedRef} {...props} />
    );
  }
);

export { Button };
export type { IButton, IButtonProps, IButtonHtmlProps };
