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

/**
 * Type to define `Divider` component
 */
type IDivider = typeof Divider;

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
function Divider({
  className,
  decorative = false,
  hidden = false,
  orientation = "horizontal",
  spacing = "4",
  theme = "gray",
  ...props
}: IDividerProps) {
  const aria = decorative
    ? { role: "none" }
    : { "aria-orientation": orientation, role: "separator" };

  return (
    <Component.div
      className={clsx(
        "rounded-lg",
        hidden ? "bg-inherit" : getBgColor(theme, "200"),
        orientation === "horizontal"
          ? `${marginY[size.indexOf(spacing)]} h-[2px]`
          : `${marginX[size.indexOf(spacing)]} w-[2px]`,
        className
      )}
      {...props}
    />
  );
}

Divider.displayName = "Divider";

export { Divider };
export type { IDivider, IDividerProps };
