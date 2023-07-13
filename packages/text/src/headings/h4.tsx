import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import * as React from "react";

/**
 * Type to define `H4` element
 */
type IH4 = React.ElementRef<typeof Component.h4>;

/**
 * Type to define `H4` props
 */
interface IH4Props {}

/**
 * `H4` - A text component used to render an h4 tag
 * @param props `IH4Props` used to render this `H4`
 * @returns `H4` component
 */
const H4 = React.forwardRef<
  IH4,
  IH4Props & IComponentPropsWithoutRef<typeof Component.h4>
>(({ className, ...props }, forwardedRef) => {
  // TODO: Bring back theming
  return (
    <h4
      className={[
        "font-semibold text-lg sm:text-xl mt-8 mb-2",
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
export type { IH4, IH4Props };
