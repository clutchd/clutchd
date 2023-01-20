import { clsx } from "@clutchd/clsx";
import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { ILayoutWithDirection, ILayoutWithPadding, Layout } from "./layout";

/**
 * Type to define `Content` component
 */
type IContent = typeof Content;

/**
 * Type to define `Content` props
 */
interface IContentProps
  extends ILayoutWithDirection,
    ILayoutWithPadding,
    IComponentPropsWithoutRef<typeof Component.main> {}

/**
 * `Content` - A layout component designed to contain a page's primary content. Renders as a `main` element
 * @param props `IContentProps` used to render this `Content`
 * @returns `Content` component
 */
function Content({
  children,
  className,
  direction = "col",
  padding = true,
  ...props
}: IContentProps) {
  return (
    <Layout
      asChild
      className={clsx("flex-1", padding ? "p-6 sm:p-8" : "", className)}
      direction={direction}
      {...props}
    >
      <main>{children}</main>
    </Layout>
  );
}

Content.displayName = "Content";

export { Content };
export type { IContent, IContentProps };
