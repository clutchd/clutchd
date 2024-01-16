import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import * as React from "react";

/**
 * Type to define `Italic` element
 */
type IEm = React.ElementRef<typeof Component.em>;

/**
 * Type to define `Em` props
 */
interface IEmProps extends IComponentPropsWithoutRef<typeof Component.em> {}

/**
 * `Em` - A inline text component used to italicize the provided text
 * @param props `IEmProps` used to render this `Em`
 * @returns `Em` component
 */
const Em = React.forwardRef<IEm, IEmProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <em
        className={["italic", className].join(" ")}
        ref={forwardedRef}
        {...props}
      />
    );
  },
);

Em.displayName = "TextEm";

export { Em };
export type { IEm, IEmProps };
