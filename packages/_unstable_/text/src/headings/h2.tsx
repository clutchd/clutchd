import { Component } from "@clutchd/component";
import * as React from "react";

/**
 * Type to define `H2` element
 */
type IH2 = React.ElementRef<typeof Component.h2>;

/**
 * Type to define `H2` props
 */
interface IH2Props {}

/**
 * `H2` - A text component used to render an h2 tag
 * @param props `IH2Props` used to render this `H2`
 * @returns `H2` component
 */
const H2 = React.forwardRef<
  IH2,
  IH2Props & React.ComponentPropsWithoutRef<typeof Component.h2>
>(({ className, ...props }, forwardedRef) => {
  // TODO: Bring back theming
  return (
    <h2
      className={[
        "mb-6 mt-10 text-2xl font-bold sm:text-3xl",
        "text-gray-900 dark:text-gray-50",
        className,
      ].join(" ")}
      ref={forwardedRef}
      {...props}
    />
  );
});

H2.displayName = "TextH2";

export { H2 };
export type { IH2, IH2Props };
