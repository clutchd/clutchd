import { clsx } from "@clutchd/clsx";
import { IWithSpaceY } from "@clutchd/tailwind";
import { Flex, IFlexPropsCommon } from "./flex";

/**
 * Type to define `FlexCol` component
 */
type IFlexCol = typeof FlexCol;

/**
 * Type to define `FlexCol` props
 */
interface IFlexColProps extends IFlexPropsCommon, IWithSpaceY {}

/**
 * `FlexCol` - A flex container for a vertical layout
 * @param props `IFlexColProps` used to render this `FlexCol`
 * @returns `FlexCol` component
 */
function FlexCol({
  alignItems,
  className,
  justifyContent,
  spaceY,
  ...props
}: IFlexColProps) {
  const classNames = clsx(spaceY, className);
  return (
    <Flex
      alignItems={alignItems}
      className={classNames}
      flexDirection="flex-col"
      justifyContent={justifyContent}
      {...props}
    />
  );
}

FlexCol.displayName = "FlexCol";

export { FlexCol };
export type { IFlexCol, IFlexColProps };
