import { Component } from "@clutchd/component";
import { composeClassNames as cn } from "@clutchd/compose-props";
import * as React from "react";

/**
 * Type to define `Card` element
 */
type ICard = React.ElementRef<typeof Component.div>;

/**
 * Type to define `Card` props with html attributes
 */
interface ICardHtmlProps
  extends React.ComponentPropsWithoutRef<typeof Component.div> {}

/**
 * `Card` - A building block component used to render contained elements such as forms
 * @param props `ICardHtmlProps` used to render this `Card`
 * @returns `Card` component
 */
const Card = React.forwardRef<ICard, ICardHtmlProps>(
  ({ children, className, ...props }, forwardedRef) => {
    // TODO: Bring back theming
    return (
      <Component.div
        className={cn(
          "relative rounded-lg border border-gray-950/10 bg-white shadow",
          className,
        )}
        ref={forwardedRef}
        {...props}
      >
        {children}
      </Component.div>
    );
  },
);

Card.displayName = "Card";

export { Card };
export type { ICard, ICardHtmlProps };
