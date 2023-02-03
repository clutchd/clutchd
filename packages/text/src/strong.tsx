import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { twx } from "@clutchd/twx";
import * as React from "react";

/**
 * Type to define `Strong` element
 */
type IStrong = React.ElementRef<typeof Component.strong>;

/**
 * Type to define `Strong` props
 */
interface IStrongProps
  extends IComponentPropsWithoutRef<typeof Component.strong> {}

/**
 * `Strong` - A inline text component used to bold the provided text
 * @param props `IStrongProps` used to render this `Strong`
 * @returns `Strong` component
 */
const Strong = React.forwardRef<IStrong, IStrongProps>(
  (props, forwardedRef) => {
    return (
      <strong className={twx("font-bold")} {...props} ref={forwardedRef} />
    );
  }
);

Strong.displayName = "TextStrong";

export { Strong };
export type { IStrong, IStrongProps };
