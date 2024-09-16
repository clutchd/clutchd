import type { Component } from "@clutchd/component";
import * as React from "react";

/**
 * Type to define `Large` element
 */
type ILarge = React.ElementRef<typeof Component.p>;

/**
 * `Large` - A large text component intended for large copy
 * @param props `ILargeProps` used to render this `Large`
 * @returns `Large` component
 */
const Large = React.forwardRef<
  ILarge,
  React.ComponentPropsWithoutRef<typeof Component.p>
>(({ className, ...props }, forwardedRef) => {
  // TODO: Bring back theming
  return (
    <p
      className={[
        "text-lg font-semibold",
        "text-gray-900 dark:text-gray-50",
        className,
      ].join(" ")}
      ref={forwardedRef}
      {...props}
    />
  );
});

Large.displayName = "TextLarge";

export { Large };
export type { ILarge };
