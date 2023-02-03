import { WithSpaceX } from "@clutchd/tailwind";
import { twx } from "@clutchd/twx";
import * as React from "react";
import { Flex, IFlex, IFlexPropsCommon } from "./flex";

/**
 * Type to define `FlexRow` element
 */
type IFlexRow = IFlex;

/**
 * Type to define `FlexRow` props
 */
interface IFlexRowProps extends IFlexPropsCommon, WithSpaceX {}

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
    return (
      <Flex
        alignItems={alignItems}
        className={twx(spaceX, className)}
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
