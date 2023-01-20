import { clsx } from "@clutchd/clsx";
import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { ILayoutWithDirection, Layout } from "./layout";

/**
 * Type to define `Page` component
 */
type IPage = typeof Page;

/**
 * Type to define `Page` props
 */
interface IPageProps
  extends ILayoutWithDirection,
    IComponentPropsWithoutRef<typeof Component.div> {}

/**
 * `Page` - A `Container` designed to contain an entire page. Renders as a `div` element that fills the screen
 * @param props `IPageProps` used to render this `Page`
 * @returns `Page` component
 */
function Page({ className, direction = "col", ...props }: IPageProps) {
  return (
    <Layout
      className={clsx(
        "min-h-screen min-w-screen subpixel-antialiased",
        className
      )}
      direction={direction}
      {...props}
    />
  );
}

Page.displayName = "Page";

export { Page };
export type { IPage, IPageProps };
