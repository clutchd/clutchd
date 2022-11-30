import { clsx } from "@clutchd/clsx";
import {
  Component,
  IComponent,
  ReactPropsWithoutRef
} from "@clutchd/component";
import { getColor, IWithColor } from "@clutchd/tailwind";

/**
 * Type to define `Divider` component
 */
type IDivider = typeof Divider;

/**
 * Type to define `Divider` props
 */
interface IDividerProps extends IWithColor, ReactPropsWithoutRef<IComponent["div"]> {
  direction?: "horizontal" | "vertical";
  hr?: boolean;
}

/**
 * `Divider` - A separator used to create vertical space between elements
 * @param props `IDividerProps` used to render this `Divider`
 * @returns `Divider` component
 */
function Divider({
  direction = "horizontal",
  hr = true,
  theme = "gray",
  ...props
}: IDividerProps) {
  const className = clsx(
    "transition-all duration-200 rounded-lg",
    hr ? getColor(theme, "200").bgColor : "bg-inherit",
    direction === "horizontal" ? "mt-6 mb-6 h-[3px]" : "ml-6 mr-6 w-[3px]",
    props.className
  );

  return (
    <Component.div className={className} {...props} />
  );
}

export { Divider };
export type { IDivider, IDividerProps };
