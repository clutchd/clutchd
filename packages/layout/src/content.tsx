import {
  IComponent,
  Component,
  ReactPropsWithoutRef,
} from "@clutchd/component";
import clsx from "clsx";
import { BuildStyle, ILayoutProps } from "./layout";

/**
 * Type to define `Content` component
 */
type IContent = typeof Content;

/**
 * Type to define `Content` props
 */
interface IContentProps
  extends ILayoutProps,
    ReactPropsWithoutRef<IComponent["main"]> {}

/**
 * `Content` - A `Container` designed to contain a page's primary content. Renders as a `main` element
 * @param props `IContentProps` used to render this `Content`
 * @returns `Content` component
 */
function Content({
  col = true,
  padding = true,
  row = false,
  ...props
}: IContentProps) {
  const className = clsx(
    "flex flex-1",
    BuildStyle({ col, padding, row }),
    props.className
  );
  return <Component.main {...props} className={className} />;
}

export { Content };
export type { IContent, IContentProps };
