import { IComponent, ReactPropsWithoutRef } from "@clutchd/component";
import clsx from "clsx";
import { BuildStyle, ILayoutProps } from "./layout";

/**
 * Type to define `Page` component
 */
type IPage = typeof Page;

/**
 * Type to define `Page` props
 */
interface IPageProps
  extends ILayoutProps,
    ReactPropsWithoutRef<IComponent["header"]> {}

/**
 * `Page` - A `Container` designed to contain an entire page. Renders as a `div` element that fills the screen
 * @param props `IPageProps` used to render this `Page`
 * @returns `Page` component
 */
function Page({
  col = false,
  padding = false,
  row = false,
  ...props
}: IPageProps) {
  const className = clsx(
    "flex flex-1 min-h-screen min-w-screen",
    BuildStyle({ col, padding, row }),
    props.className
  );
  return <div {...props} className={className} />;
}

export { Page };
export type { IPage, IPageProps };
