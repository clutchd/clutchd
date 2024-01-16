import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import * as React from "react";

/**
 * Type to define `Skeleton` element
 */
type ISkeleton = React.ElementRef<typeof Component.div>;

/**
 * Type to define `Skeleton` props
 */
interface ISkeletonProps
  extends IComponentPropsWithoutRef<typeof Component.div> {}

/**
 * `Skeleton` - A generic component used to render content structures and loading states
 * @param props `ISkeletonProps` used to render this `Skeleton`
 * @returns `Skeleton` component
 */
const Skeleton = React.forwardRef<ISkeleton, ISkeletonProps>(
  ({ children = "\u200b", className, ...props }, forwardedRef) => {
    return (
      <Component.div
        className={[
          "block h-full w-full animate-pulse rounded bg-black/10 motion-reduce:animate-none dark:bg-white/10",
          className,
        ].join(" ")}
        ref={forwardedRef}
        {...props}
      />
    );
  },
);

Skeleton.displayName = "Skeleton";

export { Skeleton };
export type { ISkeleton, ISkeletonProps };
