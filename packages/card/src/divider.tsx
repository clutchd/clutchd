import { Divider, IDividerProps } from "@clutchd/divider";
import { clsx } from "@clutchd/clsx";

/**
 * Type to define `CardDivider` component
 */
type ICardDivider = typeof CardDivider;

/**
 * Type to define `CardDivider` props
 */
interface ICardDividerProps extends IDividerProps {}

/**
 * `CardDivider` - A building block component used to render the divider of a `Card` component
 * @param props `ICardDividerProps` used to render this `CardDivider`
 * @returns `CardDivider` component
 */
function CardDivider({ className, ...props }: ICardDividerProps) {
  return <Divider className={clsx("-mx-6", className)} {...props} />;
}

CardDivider.displayName = "CardDivider";

export { CardDivider };
export type { ICardDividerProps, ICardDivider };
