import { composeClassNames as cn } from "@clutchd/compose-props";
// biome-ignore lint: We actually need react, not just the type
import * as React from "react";

/**
 * `Main` - A layout component designed to contain a page's primary Main. Renders as a `main` element.
 * @param props `IMainHtmlProps` used to render this `Main`.
 * @returns `Main` component.
 */
function Main({ className, ...props }: React.ComponentPropsWithoutRef<"main">) {
  return <main className={cn("flex flex-col", className)} {...props} />;
}

Main.displayName = "Main";

export { Main };
