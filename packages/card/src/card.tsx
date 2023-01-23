import { clsx } from "@clutchd/clsx";
import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { getBorderColor, IWithColor } from "@clutchd/tailwind";
import * as React from "react";

/**
 * Type to define `Card` element
 */
type ICard = React.ElementRef<typeof Component.div>;

/**
 * Type to define `Card` props
 */
interface ICardProps
  extends IWithColor,
    IComponentPropsWithoutRef<typeof Component.div> {
  decoration?: "top" | "right" | "bottom" | "left";
  hover?: boolean;
}

/**
 * `Card` - A building block component used to render contained elements such as forms
 * @param props `ICardProps` used to render this `Card`
 * @returns `Card` component
 */
const Card = React.forwardRef<ICard, ICardProps>(
  (
    {
      children,
      className,
      decoration,
      hover = false,
      theme = "gray",
      ...props
    },
    forwardedRef
  ) => {
    const classNames = clsx(
      "transition-all relative p-6 bg-white rounded-lg shadow ring-gray-200 ring-1",
      getDecoration(decoration),
      getBorderColor(theme, "400"),
      hover && "hover:shadow-lg",
      className
    );

    return (
      <Component.div className={classNames} ref={forwardedRef} {...props}>
        {children}
      </Component.div>
    );
  }
);

Card.displayName = "Card";

/**
 * Gets the appropriate tailwind class based on the decoration prop
 * @param decoration Prop used to determine the decoration of this Card
 * @returns The appropriate tailwind class
 */
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
