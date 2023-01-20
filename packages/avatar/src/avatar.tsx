import { clsx } from "@clutchd/clsx";
import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import {
  getBgColor,
  getBorderColor,
  getSize,
  getSizePx,
  getTextColor,
  IWithBorderRadius,
  IWithBorderWidth,
  IWithColor,
  IWithSize,
} from "@clutchd/tailwind";
import Image from "next/image";
import { useState } from "react";

/**
 * Type to define `Avatar` component
 */
type IAvatar = typeof Avatar;

/**
 * Type to define `Avatar` props
 */
interface IAvatarProps
  extends IWithBorderRadius,
    IWithBorderWidth,
    IWithColor,
    IWithSize,
    IComponentPropsWithoutRef<typeof Component.span> {
  src: string;
  alt?: string;
}

type IAvatarLoadingStates = "idle" | "loading" | "loaded" | "error";

/**
 * `Avatar` - An image based component used to render a user's profile picture
 * @param props `IAvatarProps` used to render this `Avatar`
 * @returns `Avatar` component
 */
function Avatar({
  alt = "",
  borderRadius = "rounded-full",
  borderWidth = "border",
  children = "U",
  className,
  size = "12",
  src,
  theme = "gray",
  ...props
}: IAvatarProps) {
  const [loadingState, setLoadingState] =
    useState<IAvatarLoadingStates>("idle");

  const fallback = (
    <span
      className={clsx(
        "flex items-center justify-center w-full h-full font-semibold",
        getBgColor(theme, "100"),
        getTextColor(theme, "500"),
        borderRadius
      )}
    >
      {children}
    </span>
  );

  const image = (
    <Image
      onLoadStart={() => setLoadingState("loading")}
      onLoadingComplete={() => setLoadingState("loaded")}
      onError={() => setLoadingState("error")}
      className={clsx("object-cover", borderRadius)}
      height={getSizePx(size)}
      width={getSizePx(size)}
      alt={alt}
      src={src}
      quality={100}
    />
  );

  return (
    <Component.span
      className={clsx(
        "inline-flex items-center justify-center align-middle select-none",
        getBorderColor(theme, "300"),
        getSize(size),
        borderRadius,
        borderWidth,
        className
      )}
      {...props}
    >
      {src && image}
      {loadingState != "loaded" && fallback}
    </Component.span>
  );
}

Avatar.displayName = "Avatar";

export { Avatar };
export type { IAvatarProps, IAvatar };
