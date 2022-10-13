import { IComponent, ReactPropsWithoutRef } from "@clutchd/component";
import clsx from "clsx";
import { BuildStyle, ILayoutProps } from "./layout";

/**
 * Type to define `Header` component
 */
type IHeader = typeof Header;

/**
 * Type to define `Header` props
 */
interface IHeaderProps
  extends ILayoutProps,
    ReactPropsWithoutRef<IComponent["header"]> {}

/**
 * `Header` - A `Container` designed to contain a page's header content. Renders as a `header` element
 * @param props `IHeaderProps` used to render this `Header`
 * @returns `Header` component
 */
function Header({
  col = false,
  padding = true,
  row = false,
  ...props
}: IHeaderProps) {
  const className = clsx(
    "flex grow-1 shrink-0",
    BuildStyle({ col, padding, row }),
    props.className
  );
  return <header {...props} className={className} />;
}

export { Header };
export type { IHeader, IHeaderProps };
