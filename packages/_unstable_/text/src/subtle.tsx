import type { Component } from "@clutchd/component";
import * as React from "react";

/**
 * Type to define `Subtle` element
 */
type ISubtle = React.ElementRef<typeof Component.p>;

/**
 * `Subtle` - A small text component intended for subtle copy
 * @param props `ISubtleProps` used to render this `Subtle`
 * @returns `Subtle` component
 */
const Subtle = React.forwardRef<
  ISubtle,
  React.ComponentPropsWithoutRef<typeof Component.p>
>(({ className, ...props }, forwardedRef) => {
  // TODO: Bring back theming
  return (
    <p
      className={[
        "text-xs sm:text-sm",
        "text-gray-500 dark:text-gray-400",
        className,
      ].join(" ")}
      ref={forwardedRef}
      {...props}
    />
  );
});

Subtle.displayName = "TextSubtle";

export { Subtle };
export type { ISubtle };
