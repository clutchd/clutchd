import { clsx } from "@clutchd/clsx";
import { IWithSpaceX } from "@clutchd/tailwind";
import { Flex, IFlexPropsCommon } from "./flex";

/**
 * Type to define `FlexRow` component
 */
type IFlexRow = typeof FlexRow;

/**
 * Type to define `FlexRow` props
 */
interface IFlexRowProps extends IFlexPropsCommon, IWithSpaceX {}

/**
 * `FlexRow` - A flex container for a horizontal layout
 * @param props `IFlexRowProps` used to render this `FlexRow`
 * @returns `FlexRow` component
 */
function FlexRow({
  alignItems,
  className,
  justifyContent,
  spaceX,
  ...props
}: IFlexRowProps) {
  const classNames = clsx(spaceX, className);
  return (
    <Flex
      alignItems={alignItems}
      className={classNames}
      flexDirection="flex-row"
      justifyContent={justifyContent}
      {...props}
    />
  );
}

FlexRow.displayName = "FlexRow";

export { FlexRow };
export type { IFlexRow, IFlexRowProps };
