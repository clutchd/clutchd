import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { composeClassNames as cn } from "@clutchd/compose-props";
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
 * @param props `IDividerHtmlProps` used to render this `Divider`
 * @returns `Divider` component
 */
const Divider = React.forwardRef<IDivider, IDividerHtmlProps>(
  (
    {
      children,
      className,
      decorative = false,
      orientation = "horizontal",
      ...props
    },
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

    // TODO: Bring back theming?
    return (
      <Component.div
        {...aria}
        className={cn(orientation === "vertical" ? `w-px` : `h-px`, className)}
        data-orientation={orientation}
        ref={forwardedRef}
        {...props}
      />
    );
  },
);

Divider.displayName = "Divider";

export { Divider };
export type { IDivider, IDividerProps, IDividerHtmlProps };
