import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import * as React from "react";

/**
 * Type to define `Card` element
 */
type ICard = React.ElementRef<typeof Component.div>;

/**
 * Type to define `Card` props
 */
interface ICardProps {
  decoration?: "top" | "right" | "bottom" | "left";
  hover?: boolean;
}

/**
 * Type to define `Card` props with html attributes
 */
interface ICardHtmlProps
  extends ICardProps,
    IComponentPropsWithoutRef<typeof Component.div> {}

/**
 * `Card` - A building block component used to render contained elements such as forms
 * @param props `ICardProps` used to render this `Card`
 * @returns `Card` component
 */
const Card = React.forwardRef<ICard, ICardHtmlProps>(
  (
    { children, className, decoration, hover = false, ...props },
    forwardedRef
  ) => {
    // TODO: Bring back theming
    const classNames = [
      "relative p-6 rounded-lg shadow ring-1 bg-white dark:bg-gray-900",
      "border-gray-400 dark:border-gray-500 ring-gray-200 dark:ring-gray-700",
      getDecoration(decoration),
      hover && "hover:shadow-lg",
      className,
    ].join(" ");

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
export type { ICardProps, ICard, ICardHtmlProps };
