import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import * as React from "react";

/**
 * Type to define `Small` element
 */
type ISmall = React.ElementRef<typeof Component.small>;

/**
 * Type to define `Small` props
 */
interface ISmallProps {}

/**
 * `Small` - A inline text component used to make the provided text small
 * @param props `ISmallProps` used to render this `Small`
 * @returns `Small` component
 */
const Small = React.forwardRef<
  ISmall,
  ISmallProps & IComponentPropsWithoutRef<typeof Component.small>
>((props, forwardedRef) => {
  return (
    <small
      className={["text-xs sm:text-sm font-medium leading-none"].join(" ")}
      {...props}
      ref={forwardedRef}
    />
  );
});

Small.displayName = "TextSmall";

export { Small };
export type { ISmall, ISmallProps };
