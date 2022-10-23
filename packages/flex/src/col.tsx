import { clsx } from "@clutchd/clsx";
import { IComponent, ReactPropsWithoutRef } from "@clutchd/component";
import {
  IWithAlignItems,
  IWithJustifyContent,
  IWithSpaceY,
} from "@clutchd/tailwind";
import { Flex } from "./flex";

/**
 * Type to define `Col` component
 */
type ICol = typeof Col;

/**
 * Type to define `Col` props
 */
interface IColProps
  extends IWithAlignItems,
    IWithJustifyContent,
    IWithSpaceY,
    ReactPropsWithoutRef<IComponent["div"]> {}

/**
 * `Col` - A flex container for a vertical layout
 * @param props `IColProps` used to render this `Col`
 * @returns `Col` component
 */
function Col({
  alignItems,
  className,
  justifyContent,
  spaceY,
  ...props
}: IColProps) {
  const classNames = clsx(spaceY, className);
  return (
    <Flex
      alignItems={alignItems}
      className={classNames}
      justifyContent={justifyContent}
      {...props}
    />
  );
}

export { Col };
export type { ICol, IColProps };
