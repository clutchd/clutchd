import { FlexCol, FlexRow } from "@clutchd/flex";

/**
 * Type to define `Layout` component
 */
type ILayout = typeof Layout;

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
function Layout({ asChild, direction, ...props }: ILayoutProps) {
  // if row, return row
  if (direction === "row") {
    return <FlexRow asChild={asChild} {...props} />;
  }

  // otherwise, return col
  return <FlexCol asChild={asChild} {...props} />;
}

Layout.displayName = "Layout";

export { Layout };
export type { ILayout, ILayoutProps, ILayoutWithDirection, ILayoutWithPadding };
