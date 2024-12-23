import { Component, type ComponentPropsWithRef } from "@clutchd/component";
import * as React from "react";

/**
 * `Header` - A layout component designed to contain a page's header content. Renders as a `header` element.
 * @param props `IHeaderHtmlProps` used to render this `Header`.
 * @returns `Header` component.
 */
function Header({ className, ...props }: ComponentPropsWithRef<"header">) {
  return (
    <Component.header
      className={["flex flex-row justify-between", className].join(" ")}
      {...props}
    />
  );
}

Header.displayName = "Header";

export { Header };
