import { composeClassNames as cn } from "@clutchd/compose-props";
// biome-ignore lint: We actually need react, not just the type
import * as React from "react";

/**
 * `Footer` - A layout component designed to contain a page's footer content. Renders as a `footer` element.
 * @param props `IFooterHtmlProps` used to render this `Footer`.
 * @returns `Footer` component.
 */
function Footer({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"footer">) {
  return (
    // TODO: Should this be a Primitive?
    <footer
      className={cn("flex flex-row justify-between", className)}
      {...props}
    />
  );
}

Footer.displayName = "Footer";

export { Footer };
