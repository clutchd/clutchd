import { Component, ReactPropsWithoutRef } from "@clutchd/component";
import clsx from "clsx";
import { BuildStyle, ILayoutProps } from "./layout";

/**
 * Type to define `Footer` component
 */
type IFooter = typeof Footer;

/**
 * Type to define `Footer` props
 */
interface IFooterProps
  extends ILayoutProps,
    ReactPropsWithoutRef<typeof Component.footer> {}

/**
 * `Footer` - A `Container` designed to contain a page's footer content. Renders as a `footer` element
 * @param props `IFooterProps` used to render this `Footer`
 * @returns `Footer` component
 */
function Footer({
  col = true,
  padding = true,
  row = false,
  ...props
}: IFooterProps) {
  const className = clsx(
    "flex grow-1 shrink-0",
    BuildStyle({ col, padding, row }),
    props.className
  );
  return <footer {...props} className={className} />;
}

export { Footer };
export type { IFooter, IFooterProps };
