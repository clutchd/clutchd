import * as React from "react";
import { Flex, FlexClassNames, IFlex, IFlexProps } from "./flex";

/**
 * Type to define `FlexCol` element
 */
type IFlexCol = IFlex;

/**
 * Type to define `FlexCol` props
 */
interface IFlexColProps extends IFlexProps { }

/**
 * Class names used to style the `FlexCol` component
 */
const FlexColClassNames = [FlexClassNames, `flex-col`].join(" ");

/**
 * `FlexCol` - A flex container for a vertical layout
 * @param props `IFlexColProps` used to render this `FlexCol`
 * @returns `FlexCol` component
 */
const FlexCol = React.forwardRef<IFlexCol, IFlexColProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <Flex
        className={[FlexColClassNames, className].filter(Boolean).join(" ")}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

FlexCol.displayName = "FlexCol";

export { FlexCol, FlexColClassNames };
export type { IFlexCol, IFlexColProps };
