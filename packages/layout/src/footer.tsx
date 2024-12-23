import { Component, type ComponentPropsWithRef } from "@clutchd/component";
import * as React from "react";

/**
 * `Footer` - A layout component designed to contain a page's footer content. Renders as a `footer` element.
 * @param props `IFooterHtmlProps` used to render this `Footer`.
 * @returns `Footer` component.
 */
function Footer({ className, ...props }: ComponentPropsWithRef<"footer">) {
  return (
    <Component.footer
      className={["flex flex-row justify-between", className].join(" ")}
      {...props}
    />
  );
}

Footer.displayName = "Footer";

export { Footer };
