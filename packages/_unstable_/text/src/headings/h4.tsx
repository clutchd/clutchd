import type { Component } from "@clutchd/component";
import * as React from "react";

/**
 * Type to define `H4` element
 */
type IH4 = React.ElementRef<typeof Component.h4>;

/**
 * `H4` - A text component used to render an h4 tag
 * @param props `IH4Props` used to render this `H4`
 * @returns `H4` component
 */
const H4 = React.forwardRef<
  IH4,
  React.ComponentPropsWithoutRef<typeof Component.h4>
>(({ className, ...props }, forwardedRef) => {
  // TODO: Bring back theming
  return (
    <h4
      className={[
        "mb-2 mt-8 text-lg font-semibold sm:text-xl",
        "text-gray-900 dark:text-gray-50",
        className,
      ].join(" ")}
      ref={forwardedRef}
      {...props}
    />
  );
});

H4.displayName = "TextH4";

export { H4 };
export type { IH4 };
