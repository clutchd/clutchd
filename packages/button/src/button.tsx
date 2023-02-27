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
  ({ className, href, ...props }, forwardedRef) => {
    if (href) {
      // TODO: Need a better solution, not valid html5
      return (
        <Link className="cursor-pointer" href={href}>
          <Component.button className={className} ref={forwardedRef} {...props} />
        </Link>
      );
    }

    return (
      <Component.button className={className} ref={forwardedRef} {...props} />
    );
  }
);

export { Button };
export type { IButton, IButtonProps };
