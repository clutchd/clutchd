import * as React from "react";
import { Flex, IFlex, IFlexProps } from "./flex";

/**
 * Type to define `FlexCol` element
 */
type IFlexCol = IFlex;

/**
 * Type to define `FlexCol` props
 */
interface IFlexColProps extends IFlexProps {}

/**
 * `FlexCol` - A flex container for a vertical layout
 * @param props `IFlexColProps` used to render this `FlexCol`
 * @returns `FlexCol` component
 */
const FlexCol = React.forwardRef<IFlexCol, IFlexColProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <Flex
        className={["flex-col", className].filter(Boolean).join(" ")}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

FlexCol.displayName = "FlexCol";

export { FlexCol };
export type { IFlexCol, IFlexColProps };
