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
  decorative?: boolean;
  hidden?: boolean;
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
 * @param props `IDividerProps` used to render this `Divider`
 * @returns `Divider` component
 */
const Divider = React.forwardRef<IDivider, IDividerHtmlProps>(
  (
    {
      children,
      className,
      decorative = false,
      hidden = false,
      orientation = "horizontal",
      ...props
    },
    forwardedRef
  ) => {
    // define aria props
    const aria = decorative
      ? { role: "none" }
      : { "aria-orientation": orientation, role: "separator" };

    // TODO: Bring back theming
    return (
      <Component.div
        {...aria}
        className={[
          "rounded-lg",
          hidden ? "bg-inherit" : "bg-gray-200",
          orientation === "horizontal" ? `h-px` : `w-px`,
          className,
        ].join(" ")}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";

export { Divider };
export type { IDivider, IDividerProps, IDividerHtmlProps };