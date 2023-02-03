import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { twx } from "@clutchd/twx";
import * as React from "react";

/**
 * Type to define `Small` element
 */
type ISmall = React.ElementRef<typeof Component.small>;

/**
 * Type to define `Small` props
 */
interface ISmallProps
  extends IComponentPropsWithoutRef<typeof Component.small> {}

/**
 * `Small` - A inline text component used to make the provided text small
 * @param props `ISmallProps` used to render this `Small`
 * @returns `Small` component
 */
const Small = React.forwardRef<ISmall, ISmallProps>((props, forwardedRef) => {
  return (
    <small
      className={twx("text-sm font-medium leading-none")}
      {...props}
      ref={forwardedRef}
    />
  );
});

Small.displayName = "TextSmall";

export { Small };
export type { ISmall, ISmallProps };
