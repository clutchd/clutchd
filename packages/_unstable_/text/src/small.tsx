import type { Component } from "@clutchd/component";
import * as React from "react";

/**
 * Type to define `Small` element
 */
type ISmall = React.ElementRef<typeof Component.small>;

/**
 * `Small` - A inline text component used to make the provided text small
 * @param props `ISmallProps` used to render this `Small`
 * @returns `Small` component
 */
const Small = React.forwardRef<
  ISmall & React.ComponentPropsWithoutRef<typeof Component.small>
>((props, forwardedRef) => {
  return (
    <small
      className={["text-xs font-medium leading-none sm:text-sm"].join(" ")}
      {...props}
      ref={forwardedRef}
    />
  );
});

Small.displayName = "TextSmall";

export { Small };
export type { ISmall };
