import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { ILayoutWithDirection, Layout } from "./layout";
import * as React from "react";

/**
 * Type to define `Content` element
 */
type IContent = React.ElementRef<typeof Component.main>;

/**
 * Type to define `Content` props
 */
interface IContentProps
  extends ILayoutWithDirection,
    IComponentPropsWithoutRef<typeof Component.main> {}

/**
 * `Content` - A layout component designed to contain a page's primary content. Renders as a `main` element
 * @param props `IContentProps` used to render this `Content`
 * @returns `Content` component
 */
const Content = React.forwardRef<IContent, IContentProps>(
  ({ children, className, direction = "col", ...props }, forwardedRef) => {
    return (
      <Layout
        asChild
        className={["flex-1 p-6 sm:p-8", className].filter(Boolean).join(" ")}
        direction={direction}
        {...props}
      >
        <main ref={forwardedRef}>{children}</main>
      </Layout>
    );
  }
);

Content.displayName = "Content";

export { Content };
export type { IContent, IContentProps };
