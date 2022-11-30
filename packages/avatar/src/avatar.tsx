import { Component, ReactPropsWithoutRef } from "@clutchd/component";
import { clsx } from "@clutchd/clsx";
import Image from "next/image";
import { useState } from "react";

/**
 * Types of loading states for an `Avatar`'s image
 */
type loadingTypes = "idle" | "loading" | "loaded";

/**
 * Type to define `Avatar` component
 */
type IAvatar = typeof Avatar;

/**
 * Type to define `Avatar` props
 */
interface IAvatarProps extends ReactPropsWithoutRef<typeof Component.span> {
  src: string;
  alt?: string;
  fallback?: string;
}

/**
 * `Avatar` - An image based component used to render a user's profile picture
 * @param props `IAvatarProps` used to render this `Avatar`
 * @returns `Avatar` component
 */
function Avatar({
  alt,
  className,
  fallback = "U",
  src,
  ...props
}: IAvatarProps) {
  const [loadingState, setLoadingState] = useState<loadingTypes>("idle");

  const classNames = clsx(
    "h-12 w-12 rounded-full overflow-hidden relative",
    className
  );

  return (
    <Component.span className={classNames} {...props}>
      {src != null && (
        <Image
          onLoadStart={() => {
            console.log("start");
            setLoadingState("loading");
          }}
          onLoadingComplete={() => {
            console.log("done");
            setLoadingState("loaded");
          }}
          alt={alt}
          layout="fill"
          objectFit="cover"
          src={src}
        />
      )}
      {loadingState != "loaded" && (
        <span className="block w-full h-full text-center leading-[48px] bg-gray-200 text-gray-500">
          {fallback}
        </span>
      )}
    </Component.span>
  );
}

export { Avatar };
export type { IAvatarProps, IAvatar };
