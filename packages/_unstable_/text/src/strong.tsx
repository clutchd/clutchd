import type { Component } from "@clutchd/component";
import * as React from "react";

/**
 * Type to define `Strong` element
 */
type IStrong = React.ElementRef<typeof Component.strong>;

/**
 * `Strong` - A inline text component used to bold the provided text
 * @param props `IStrongProps` used to render this `Strong`
 * @returns `Strong` component
 */
const Strong = React.forwardRef<
  IStrong,
  React.ComponentPropsWithoutRef<typeof Component.strong>
>((props, forwardedRef) => {
  return (
    <strong className={["font-bold"].join(" ")} {...props} ref={forwardedRef} />
  );
});

Strong.displayName = "TextStrong";

export { Strong };
export type { IStrong };
