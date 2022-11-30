import { clsx } from "@clutchd/clsx";
import {
  Component,
  IComponent,
  ReactPropsWithoutRef,
} from "@clutchd/component";
import { getColor, IWithColor } from "@clutchd/tailwind";

/**
 * Type to define `Card` component
 */
type ICard = typeof Card;

/**
 * Type to define `Card` props
 */
interface ICardProps
  extends IWithColor,
    ReactPropsWithoutRef<IComponent["div"]> {
  decoration?: "top" | "right" | "bottom" | "left";
  hover?: boolean;
}

/**
 * `Card` - A building block component used to render contained elements such as forms
 * @param props `ICardProps` used to render this `Card`
 * @returns `Card` component
 */
function Card({
  children,
  className,
  decoration,
  hover = false,
  theme = "gray",
  ...props
}: ICardProps) {
  const classNames = clsx(
    "transition-all duration-200 relative p-6 bg-white rounded-lg shadow ring-gray-200 ring-1",
    getDecoration(decoration),
    getColor(theme, "400").borderColor,
    hover && "hover:shadow-lg",
    className
  );

  return (
    <Component.div className={classNames} {...props}>
      {children}
    </Component.div>
  );
}

function getDecoration(decoration: ICardProps["decoration"]) {
  switch (decoration) {
    case "top":
      return "border-t-4";
    case "right":
      return "border-r-4";
    case "bottom":
      return "border-b-4";
    case "left":
      return "border-l-4";
    default:
      return "";
  }
}

export { Card };
export type { ICardProps, ICard };
