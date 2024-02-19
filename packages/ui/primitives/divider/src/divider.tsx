import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import * as React from "react";

/**
 * Type to define `Divider` element
 */
type IDivider = React.ElementRef<typeof Component.div>;

/**
 * Type to define `Divider` props
 */
interface IDividerProps {
  /**
   * Determines if this divider is purely decorative.  Updates the accessibility attributes and removes this component from the accessibility tree when this is `true`.  Defaults to `false`.
   */
  decorative?: boolean;
  /**
   * Used to determine orientation of the divider.  Defaults to `horizontal`.
   */
  orientation?: "horizontal" | "vertical";
}

/**
 * Type to define `Divider` props with html attributes
 */
interface IDividerHtmlProps
  extends IDividerProps,
    IComponentPropsWithoutRef<typeof Component.div> {}

/**
 * `Divider` - A separator used to create space between elements
 * @param props `IDividerHtmlProps` used to render this `Divider`
 * @returns `Divider` component
 */
const Divider = React.forwardRef<IDivider, IDividerHtmlProps>(
  (
    { children, decorative = false, orientation = "horizontal", ...props },
    forwardedRef,
  ) => {
    // ensure only a valid aria-orientation is passed
    orientation = orientation === "vertical" ? "vertical" : "horizontal";
    // assign aria props
    const aria = decorative
      ? { role: "none" }
      : {
          "aria-orientation": orientation,
          role: "separator",
        };

    return (
      <Component.div
        {...aria}
        data-orientation={orientation}
        ref={forwardedRef}
        {...props}
      />
    );
  },
);

Divider.displayName = "Divider";

export { Divider };
export type { IDivider, IDividerHtmlProps, IDividerProps };
