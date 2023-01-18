import { clsx } from "@clutchd/clsx";
import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { isEmpty } from "@clutchd/is-empty";
import {
  getBgColor,
  getBorderColor,
  getSize,
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
  fallback?: string;
}

/**
 * `Avatar` - An image based component used to render a user's profile picture
 * @param props `IAvatarProps` used to render this `Avatar`
 * @returns `Avatar` component
 */
function Avatar({
  alt,
  borderRadius = "rounded-full",
  borderWidth = "border",
  className,
  fallback = "U",
  size = "12",
  src,
  theme = "gray",
  ...props
}: IAvatarProps) {
  const [loadingState, setLoadingState] = useState<boolean>(false);

  const fallbackAvatar = (
    <span className="absolute max-w-full font-semibold leading-none truncate -translate-x-1/2 -translate-y-1/2 h-fit w-fit inset-1/2">
      {fallback}
    </span>
  );

  const imageAvatar = (
    <Image
      onLoadStart={() => setLoadingState(true)}
      onLoadingComplete={() => setLoadingState(false)}
      fill
      alt={alt ?? ""}
      src={src}
    />
  );

  const classNames = clsx(
    "overflow-hidden relative",
    getBgColor(theme, "200"),
    getBorderColor(theme, "500"),
    getTextColor(theme, "500"),
    getSize(size),
    borderRadius,
    borderWidth,
    className
  );

  function getAvatar() {
    if (isEmpty(src)) {
      return fallbackAvatar;
    }

    return (
      <>
        {imageAvatar}
        {loadingState && fallbackAvatar}
      </>
    );
  }

  return (
    <Component.span className={classNames} {...props}>
      {getAvatar()}
    </Component.span>
  );
}

Avatar.displayName = "Avatar";

export { Avatar };
export type { IAvatarProps, IAvatar };
