import { clsx } from "@clutchd/clsx";
import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { ILayoutWithDirection, ILayoutWithPadding, Layout } from "./layout";

/**
 * Type to define `Footer` component
 */
type IFooter = typeof Footer;

/**
 * Type to define `Footer` props
 */
interface IFooterProps
  extends ILayoutWithDirection,
    ILayoutWithPadding,
    IComponentPropsWithoutRef<typeof Component.footer> {}

/**
 * `Footer` - A layout component designed to contain a page's footer content. Renders as a `footer` element
 * @param props `IFooterProps` used to render this `Footer`
 * @returns `Footer` component
 */
function Footer({
  children,
  className,
  direction = "row",
  padding = true,
  ...props
}: IFooterProps) {
  return (
    <Layout
      asChild
      className={clsx(padding ? "p-6 sm:p-8" : "", className)}
      direction={direction}
      {...props}
    >
      <footer>{children}</footer>
    </Layout>
  );
}

Footer.displayName = "Footer";

export { Footer };
export type { IFooter, IFooterProps };
