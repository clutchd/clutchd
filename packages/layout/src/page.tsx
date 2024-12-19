import { composeClassNames as cn } from "@clutchd/compose-props";
import { Primitive } from "@radix-ui/react-primitive";
// biome-ignore lint: We actually need react, not just the type
import * as React from "react";

/**
 * `Page` - A `Container` designed to contain an entire page. Renders as a `div` element that fills the screen.
 * @param props `IPageHtmlProps` used to render this `Page`.
 * @returns `Page` component.
 */
function Page({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Primitive.div>) {
  return (
    <Primitive.div
      className={cn("flex flex-col min-w-screen min-h-screen", className)}
      {...props}
    />
  );
}

Page.displayName = "Page";

export { Page };
