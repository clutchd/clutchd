import { clsx } from "@clutchd/clsx";
import { Component, IComponentPropsWithoutRef } from "@clutchd/component";

/**
 * Type to define `CardFooter` component
 */
type ICardFooter = typeof CardFooter;

/**
 * Type to define `CardFooter` props
 */
interface ICardFooterProps
  extends IComponentPropsWithoutRef<typeof Component.div> {}

/**
 * `CardFooter` - A building block component used to render the footer of a `Card` component
 * @param props `ICardFooterProps` used to render this `CardFooter`
 * @returns `CardFooter` component
 */
function CardFooter({ children, ...props }: ICardFooterProps) {
  const className = clsx("px-6 pt-6", props.className);

  return (
    <div className="items-center w-auto mt-6 -mx-6 border-t">
      <Component.div className={className} {...props}>
        {children}
      </Component.div>
    </div>
  );
}

CardFooter.displayName = "CardFooter";

export { CardFooter };
export type { ICardFooterProps, ICardFooter };
