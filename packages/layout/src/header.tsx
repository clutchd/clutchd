import { twx } from "@clutchd/twx";
// biome-ignore lint: We actually need react, not just the type
import * as React from "react";

/**
 * `Header` - A layout component designed to contain a page's header content. Renders as a `header` element.
 * @param props `IHeaderHtmlProps` used to render this `Header`.
 * @returns `Header` component.
 */
function Header({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"header">) {
  return (
    <header
      className={twx("flex flex-row justify-between", className)}
      {...props}
    />
  );
}

Header.displayName = "Header";

export { Header };
