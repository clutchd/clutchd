import { clsx } from "@clutchd/clsx";
import { IWithSpaceX } from "@clutchd/tailwind";
import * as React from "react";
import { Flex, IFlex, IFlexPropsCommon } from "./flex";

/**
 * Type to define `FlexRow` element
 */
type IFlexRow = IFlex;

/**
 * Type to define `FlexRow` props
 */
interface IFlexRowProps extends IFlexPropsCommon, IWithSpaceX {}

/**
 * `FlexRow` - A flex container for a horizontal layout
 * @param props `IFlexRowProps` used to render this `FlexRow`
 * @returns `FlexRow` component
 */
const FlexRow = React.forwardRef<IFlexRow, IFlexRowProps>(
  (
    { alignItems, className, justifyContent, spaceX, ...props },
    forwardedRef
  ) => {
    const classNames = clsx(spaceX, className);
    return (
      <Flex
        alignItems={alignItems}
        className={classNames}
        flexDirection="flex-row"
        justifyContent={justifyContent}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

FlexRow.displayName = "FlexRow";

export { FlexRow };
export type { IFlexRow, IFlexRowProps };
