import { twx } from "@clutchd/twx";
import { WithSpaceY } from "@clutchd/tailwind";
import * as React from "react";
import { Flex, IFlex, IFlexPropsCommon } from "./flex";

/**
 * Type to define `FlexCol` element
 */
type IFlexCol = IFlex;

/**
 * Type to define `FlexCol` props
 */
interface IFlexColProps extends IFlexPropsCommon, WithSpaceY {}

/**
 * `FlexCol` - A flex container for a vertical layout
 * @param props `IFlexColProps` used to render this `FlexCol`
 * @returns `FlexCol` component
 */
const FlexCol = React.forwardRef<IFlexCol, IFlexColProps>(
  (
    { alignItems, className, justifyContent, spaceY, ...props },
    forwardedRef
  ) => {
    return (
      <Flex
        alignItems={alignItems}
        className={twx(spaceY, className)}
        flexDirection="flex-col"
        justifyContent={justifyContent}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

FlexCol.displayName = "FlexCol";

export { FlexCol };
export type { IFlexCol, IFlexColProps };
