import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { clsx } from "@clutchd/clsx";
import * as React from "react";

/**
 * Type to define `Skeleton` element
 */
type ISkeleton = React.ElementRef<typeof Component.div>;

/**
 * Type to define `Skeleton` props
 */
interface ISkeletonProps
  extends IComponentPropsWithoutRef<typeof Component.div> {
  dark?: boolean;
}

/**
 * `Skeleton` - A generic component used to render content structures and loading states
 * @param props `ISkeletonProps` used to render this `Skeleton`
 * @returns `Skeleton` component
 */
const Skeleton = React.forwardRef<ISkeleton, ISkeletonProps>(
  ({ className, dark = false, ...props }, forwardedRef) => {
    return (
      <Component.div
        className={clsx("max-w-full max-h-full", className)}
        ref={forwardedRef}
        {...props}
      >
        <span
          className={clsx(
            dark ? "bg-white" : "bg-black",
            "opacity-50 rounded w-full h-full m-auto inline-block"
          )}
        >
          {"\u200b"}
        </span>
      </Component.div>
    );
  }
);

Skeleton.displayName = "Skeleton";

export { Skeleton };
export type { ISkeleton, ISkeletonProps };
