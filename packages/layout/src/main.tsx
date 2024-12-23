import { Component, type ComponentPropsWithRef } from "@clutchd/component";
import * as React from "react";

/**
 * `Main` - A layout component designed to contain a page's primary Main. Renders as a `main` element.
 * @param props `IMainHtmlProps` used to render this `Main`.
 * @returns `Main` component.
 */
function Main({ className, ...props }: ComponentPropsWithRef<"main">) {
  return (
    <Component.main
      className={["flex flex-col", className].join(" ")}
      {...props}
    />
  );
}

Main.displayName = "Main";

export { Main };
