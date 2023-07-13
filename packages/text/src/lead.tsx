import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import * as React from "react";

/**
 * Type to define `Lead` element
 */
type ILead = React.ElementRef<typeof Component.p>;

/**
 * Type to define `Lead` props
 */
interface ILeadProps {}

/**
 * `Lead` - A leading text component to be used for catch a reader's attention
 * @param props `ILeadProps` used to render this `Lead`
 * @returns `Lead` component
 */
const Lead = React.forwardRef<
  ILead,
  ILeadProps & IComponentPropsWithoutRef<typeof Component.p>
>(({ className, ...props }, forwardedRef) => {
  // TODO: Bring back theming
  return (
    <p
      className={[
        "font-baseline text-base sm:text-lg my-6",
        "text-gray-600 dark:text-gray-400",
        className,
      ].join(" ")}
      ref={forwardedRef}
      {...props}
    />
  );
});

Lead.displayName = "TextLead";

export { Lead };
export type { ILead, ILeadProps };
