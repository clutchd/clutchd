import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import Link from "next/link";
import * as React from "react";

/**
 * Type to define `Button` component
 */
type IButton = React.ElementRef<typeof Component.button>;

/**
 * Type to define `Button` props
 */
interface IButtonProps
  extends IComponentPropsWithoutRef<typeof Component.button> {
  href?: string;
}

/**
 * `Button` - A button component used to render consistent buttons
 * @param props `IButtonProps` used to render this `Button`
 * @returns `Button` component
 */
const Button = React.forwardRef<IButton, IButtonProps>(
  ({ href, ...props }, forwardedRef) => {
    const button = <Component.button ref={forwardedRef} {...props} />;

    if (href) {
      <Link href={href}>{button}</Link>;
    }

    return button;
  }
);

export { Button };
export type { IButton, IButtonProps };
