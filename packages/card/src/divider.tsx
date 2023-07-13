import { Divider, IDivider, IDividerHtmlProps, IDividerProps } from "@clutchd/divider";
import * as React from "react";

/**
 * Type to define `CardDivider` element
 */
type ICardDivider = IDivider;

/**
 * Type to define `CardDivider` props
 */
interface ICardDividerProps extends IDividerProps { }

/**
 * Type to define `CardDivider` props
 */
interface ICardDividerHtmlProps extends IDividerHtmlProps { }

/**
 * `CardDivider` - A building block component used to render the divider of a `Card` component
 * @param props `ICardDividerProps` used to render this `CardDivider`
 * @returns `CardDivider` component
 */
const CardDivider = React.forwardRef<
  ICardDivider,
  ICardDividerHtmlProps
>(({ className, orientation = "horizontal", ...props }, forwardedRef) => {
  return (
    <Divider
      className={[
        orientation === "horizontal" ? "-mx-6" : "-my-6",
        className,
      ].join(" ")}
      orientation={orientation}
      ref={forwardedRef}
      {...props}
    />
  );
});

CardDivider.displayName = "CardDivider";

export { CardDivider };
export type { ICardDivider, ICardDividerHtmlProps, ICardDividerProps };

