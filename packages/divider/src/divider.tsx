import { clsx } from "@clutchd/clsx";
import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import {
  getBgColor,
  ISize,
  IWithColor,
  marginX,
  marginY,
  size,
} from "@clutchd/tailwind";
import * as React from "react";

/**
 * Type to define `Divider` element
 */
type IDivider = React.ElementRef<typeof Component.div>;

/**
 * Type to define `Divider` props
 */
interface IDividerProps
  extends IWithColor,
    IComponentPropsWithoutRef<typeof Component.div> {
  decorative?: boolean;
  hidden?: boolean;
  orientation?: "horizontal" | "vertical";
  spacing?: ISize;
}

/**
 * `Divider` - A separator used to create space between elements
 * @param props `IDividerProps` used to render this `Divider`
 * @returns `Divider` component
 */
const Divider = React.forwardRef<IDivider, IDividerProps>(
  (
    {
      children,
      className,
      decorative = false,
      hidden = false,
      orientation = "horizontal",
      spacing = "6",
      theme = "gray",
      ...props
    },
    forwardedRef
  ) => {
    // define aria props
    const aria = decorative
      ? { role: "none" }
      : { "aria-orientation": orientation, role: "separator" };

    return (
      <Component.div
        {...aria}
        className={clsx(
          "rounded-lg",
          hidden ? "bg-inherit" : getBgColor(theme, "200"),
          orientation === "horizontal"
            ? `${marginY[size.indexOf(spacing)]} h-px`
            : `${marginX[size.indexOf(spacing)]} w-px`,
          className
        )}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";

export { Divider };
export type { IDivider, IDividerProps };
