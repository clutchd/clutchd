import {
  Component,
  IComponent,
  ReactPropsWithoutRef,
} from "@clutchd/component";
import { clsx } from "@clutchd/clsx";

/**
 * Type to define `Skeleton` component
 */
type ISkeleton = typeof Skeleton;

/**
 * Type to define `Skeleton` props
 */
interface ISkeletonProps extends ReactPropsWithoutRef<IComponent["div"]> {
  dark?: boolean;
}

/**
 * `Skeleton` - A generic component used to render content structures and loading states
 * @param props `ISkeletonProps` used to render this `Skeleton`
 * @returns `Skeleton` component
 */
function Skeleton({ className, dark = false, ...props }: ISkeletonProps) {
  return (
    <Component.div
      className={clsx("max-w-full max-h-full", className)}
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

export { Skeleton };
export type { ISkeleton, ISkeletonProps };
