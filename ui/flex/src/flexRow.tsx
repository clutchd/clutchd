import * as React from "react";
import { Flex, FlexClassNames, IFlex, IFlexProps } from "./flex";

/**
 * Type to define `FlexRow` element
 */
type IFlexRow = IFlex;

/**
 * Type to define `FlexRow` props
 */
interface IFlexRowProps extends IFlexProps { }

/**
 * Class names used to style the `FlexRow` component
 */
const FlexRowClassNames = [FlexClassNames, `flex-row`].join(" ");

/**
 * `FlexRow` - A flex container for a horizontal layout
 * @param props `IFlexRowProps` used to render this `FlexRow`
 * @returns `FlexRow` component
 */
const FlexRow = React.forwardRef<IFlexRow, IFlexRowProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <Flex
        className={[FlexRowClassNames, className].filter(Boolean).join(" ")}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

FlexRow.displayName = "FlexRow";

export { FlexRow, FlexRowClassNames };
export type { IFlexRow, IFlexRowProps };
