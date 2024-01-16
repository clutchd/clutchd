import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import * as React from "react";

/**
 * Type to define `H3` element
 */
type IH3 = React.ElementRef<typeof Component.h3>;

/**
 * Type to define `H3` props
 */
interface IH3Props {}

/**
 * `H3` - A text component used to render an h3 tag
 * @param props `IH3Props` used to render this `H3`
 * @returns `H3` component
 */
const H3 = React.forwardRef<
  IH3,
  IH3Props & IComponentPropsWithoutRef<typeof Component.h3>
>(({ className, ...props }, forwardedRef) => {
  // TODO: Bring back theming
  return (
    <h3
      className={[
        "mb-4 mt-10 text-xl font-bold sm:text-2xl",
        "text-gray-900 dark:text-gray-50",
        className,
      ].join(" ")}
      ref={forwardedRef}
      {...props}
    />
  );
});

H3.displayName = "TextH3";

export { H3 };
export type { IH3, IH3Props };
