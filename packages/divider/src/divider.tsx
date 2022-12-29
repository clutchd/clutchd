import { clsx } from "@clutchd/clsx";
import {
  Component,
  IComponent,
  ReactPropsWithoutRef,
} from "@clutchd/component";
import {
  getColor,
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
    ReactPropsWithoutRef<IComponent["div"]> {
  decorative?: boolean;
  hidden?: boolean;
  orientation?: "horizontal" | "vertical";
  spacing?: ISize;
}

/**
 * `Divider` - A separator used to create vertical space between elements
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
        "transition-all rounded-lg",
        hidden ? "bg-inherit" : getColor(theme, "200").bgColor,
        orientation === "horizontal"
          ? `${marginY[size.indexOf(spacing)]} h-[2px]`
          : `${marginX[size.indexOf(spacing)]} w-[2px]`,
        className
      )}
      {...props}
    />
  );
}

export { Divider };
export type { IDivider, IDividerProps };
