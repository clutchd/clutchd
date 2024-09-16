import type { Component } from "@clutchd/component";
import * as React from "react";

/**
 * Type to define `P` element
 */
type IP = React.ElementRef<typeof Component.p>;

/**
 * `P` - A standard text component used to render a p tag
 * @param props `IPProps` used to render this `P`
 * @returns `P` component
 */
const P = React.forwardRef<
  IP,
  React.ComponentPropsWithoutRef<typeof Component.p>
>(({ className, ...props }, forwardedRef) => {
  // TODO: Bring back theming
  return (
    <p
      className={[
        "font-baseline my-6 text-sm sm:text-base lg:text-lg",
        "text-gray-700 dark:text-gray-300",
        className,
      ].join(" ")}
      ref={forwardedRef}
      {...props}
    />
  );
});

P.displayName = "TextP";

export { P };
export type { IP };
