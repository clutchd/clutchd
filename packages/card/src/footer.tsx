import { clsx } from "@clutchd/clsx";
import {
  Component,
  IComponent,
  ReactPropsWithoutRef,
} from "@clutchd/component";

/**
 * Type to define `Footer` component
 */
type IFooter = typeof Footer;

/**
 * Type to define `Card` props
 */
interface IFooterProps extends ReactPropsWithoutRef<IComponent["div"]> {}

/**
 * `Card` - A building block component used to render contained elements such as forms
 * @param props `ICardProps` used to render this `Card`
 * @returns `Card` component
 */
function Footer({ children, ...props }: IFooterProps) {
  const className = clsx("px-6 pt-6", props.className);

  return (
    <div className="items-center w-auto mt-6 -mx-6 border-t">
      <Component.div className={className} {...props}>
        {children}
      </Component.div>
    </div>
  );
}

export { Footer };
export type { IFooterProps, IFooter };
