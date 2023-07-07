import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import * as React from "react";
import { ILayoutWithDirection, Layout } from "./layout";

/**
 * Type to define `Body` element
 */
type IBody = React.ElementRef<typeof Component.body>;

/**
 * Type to define `Body` props
 */
interface IBodyProps
  extends ILayoutWithDirection,
  IComponentPropsWithoutRef<typeof Component.body> { }

/**
 * `Body` - A `Container` designed to contain an entire page. Renders as a `body` element that fills the screen
 * @param props `IBodyProps` used to render this `Body`
 * @returns `Page` component
 */
const Body = React.forwardRef<IBody, IBodyProps>(
  ({ children, className, direction = "col", ...props }, forwardedRef) => {
    return (
      <Layout
        className={["min-h-screen min-w-screen subpixel-antialiased", className].filter(Boolean).join(" ")}
        direction={direction}
        {...props}
      >
        <body ref={forwardedRef}>{children}</body>
      </Layout >
    );
  }
);

Body.displayName = "Body";

export { Body };
export type { IBody, IBodyProps };
