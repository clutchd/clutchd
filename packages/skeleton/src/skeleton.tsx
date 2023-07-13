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
          "rounded block bg-black/10 dark:bg-white/10 w-full h-full animate-pulse motion-reduce:animate-none",
          className,
        ].join(" ")}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

Skeleton.displayName = "Skeleton";

export { Skeleton };
export type { ISkeleton, ISkeletonProps };
