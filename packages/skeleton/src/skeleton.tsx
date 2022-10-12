import { Component, ReactPropsWithoutRef } from "@clutchd/component";
import clsx from "clsx";

/**
 * Type to define `Skeleton` component
 */
type ISkeleton = typeof Skeleton;

/**
 * Type to define `Skeleton` props
 */
interface ISkeletonProps extends ReactPropsWithoutRef<typeof Component.div> {
  dark?: boolean;
}

/**
 * `Skeleton` - A generic component used to render content structures and loading states
 * @param props `ISkeletonProps` used to render this `Skeleton`
 * @returns `Skeleton` component
 */
function Skeleton({ dark = false, ...props }: ISkeletonProps) {
  return (
    <Component.div
      {...props}
      className={clsx("max-w-full max-h-full", props.className)}
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

export { Skeleton };
export type { ISkeleton, ISkeletonProps };
