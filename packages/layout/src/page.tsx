import { Component, type ComponentPropsWithRef } from "@clutchd/component";
import * as React from "react";

/**
 * `Page` - A `Container` designed to contain an entire page. Renders as a `div` element that fills the screen.
 * @param props `IPageHtmlProps` used to render this `Page`.
 * @returns `Page` component.
 */
function Page({ className, ...props }: ComponentPropsWithRef<"div">) {
  return (
    <Component.div
      className={["flex flex-col min-w-screen min-h-screen", className].join(
        " ",
      )}
      {...props}
    />
  );
}

Page.displayName = "Page";

export { Page };
