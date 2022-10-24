import {
  Card as InternalCard,
  ICard as IInternalCard,
  ICardProps as IInternalCardProps,
} from "./card";
import { Footer, IFooter, IFooterProps } from "./footer";

/**
 * Type to define `Card` component
 */
type ICard = IInternalCard & {
  Footer: IFooter;
};

/**
 * Type to define `Card` props
 */
interface ICardProps extends IInternalCardProps {
  IFooterProps: IFooterProps;
}

/**
 * `Card` - A building block component used to render contained elements such as forms
 */
const Card: ICard = InternalCard as ICard;
Card.Footer = Footer;

export { Card };
export type { ICard, ICardProps };
