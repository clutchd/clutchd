import type { Component } from "@clutchd/component";
import * as React from "react";

/**
 * Type to define `H1` element
 */
type IH1 = React.ElementRef<typeof Component.h1>;

/**
 * `H1` - A text component used to render an h1 tag
 * @param props `IH1Props` used to render this `H1`
 * @returns `H1` component
 */
const H1 = React.forwardRef<
  IH1,
  React.ComponentPropsWithoutRef<typeof Component.h1>
>(({ className, ...props }, forwardedRef) => {
  // TODO: Bring back theming
  return (
    <h1
      className={[
        "mb-8 mt-0 text-3xl font-extrabold sm:text-4xl",
        "text-gray-900 dark:text-gray-50",
        className,
      ].join(" ")}
      ref={forwardedRef}
      {...props}
    />
  );
});

H1.displayName = "TextH1";

export { H1 };
export type { IH1 };
