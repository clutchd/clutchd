import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import * as React from "react";

/**
 * Type to define `Card` element
 */
type ICard = React.ElementRef<typeof Component.div>;

/**
 * Type to define `Card` props
 */
interface ICardProps {}

/**
 * Type to define `Card` props with html attributes
 */
interface ICardHtmlProps
  extends ICardProps,
    IComponentPropsWithoutRef<typeof Component.div> {}

/**
 * `Card` - A building block component used to render contained elements such as forms
 * @param props `ICardHtmlProps` used to render this `Card`
 * @returns `Card` component
 */
const Card = React.forwardRef<ICard, ICardHtmlProps>(
  ({ children, className, ...props }, forwardedRef) => {
    // TODO: Bring back theming
    const classNames = [
      "relative rounded-lg shadow border border-gray-200 bg-white",
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

export { Card };
export type { ICardProps, ICard, ICardHtmlProps };
