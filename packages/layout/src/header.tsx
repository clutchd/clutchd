import { clsx } from "@clutchd/clsx";
import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { ILayoutWithDirection, ILayoutWithPadding, Layout } from "./layout";

/**
 * Type to define `Header` component
 */
type IHeader = typeof Header;

/**
 * Type to define `Header` props
 */
interface IHeaderProps
  extends ILayoutWithDirection,
    ILayoutWithPadding,
    IComponentPropsWithoutRef<typeof Component.header> {}

/**
 * `Header` - A layout component designed to contain a page's header content. Renders as a `header` element
 * @param props `IHeaderProps` used to render this `Header`
 * @returns `Header` component
 */
function Header({
  children,
  className,
  direction = "row",
  padding = true,
  ...props
}: IHeaderProps) {
  return (
    <Layout
      asChild
      className={clsx(padding ? "p-6 sm:p-8" : "", className)}
      direction={direction}
      {...props}
    >
      <header>{children}</header>
    </Layout>
  );
}

Header.displayName = "Header";

export { Header };
export type { IHeader, IHeaderProps };
