import { FlexCol, FlexRow, IFlexCol, IFlexRow } from "@clutchd/flex";
import * as React from "react";

/**
 * Type to define `Layout` element
 */
type ILayout = IFlexCol & IFlexRow;

/**
 * Type to define the direction prop used by multiple `Layout` components
 */
interface ILayoutWithDirection {
  direction?: "col" | "row";
}

/**
 * Type to define the padding prop used by multiple `Layout` components
 */
interface ILayoutWithPadding {
  padding?: boolean;
}

/**
 * Type to define `Layout` props
 */
interface ILayoutProps extends ILayoutWithDirection, Record<string, any> {}

/**
 * `Layout` - A container component used to render various layouts
 * @param props `ILayoutProps` used to render this `Layout`
 * @returns `Layout` component
 */
const Layout = React.forwardRef<ILayout, ILayoutProps>(
  ({ asChild, direction, ...props }, forwardedRef) => {
    // if row, return row
    if (direction === "row") {
      return <FlexRow asChild={asChild} ref={forwardedRef} {...props} />;
    }

    // otherwise, return col
    return <FlexCol asChild={asChild} ref={forwardedRef} {...props} />;
  }
);

Layout.displayName = "Layout";

export { Layout };
export type { ILayout, ILayoutProps, ILayoutWithDirection, ILayoutWithPadding };
