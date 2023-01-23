import { Divider, IDivider, IDividerProps } from "@clutchd/divider";
import { clsx } from "@clutchd/clsx";
import * as React from "react";

/**
 * Type to define `CardDivider` element
 */
type ICardDivider = IDivider;

/**
 * Type to define `CardDivider` props
 */
interface ICardDividerProps extends IDividerProps {}

/**
 * `CardDivider` - A building block component used to render the divider of a `Card` component
 * @param props `ICardDividerProps` used to render this `CardDivider`
 * @returns `CardDivider` component
 */
const CardDivider = React.forwardRef<ICardDivider, ICardDividerProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <Divider
        className={clsx("-mx-6", className)}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

CardDivider.displayName = "CardDivider";

export { CardDivider };
export type { ICardDividerProps, ICardDivider };
