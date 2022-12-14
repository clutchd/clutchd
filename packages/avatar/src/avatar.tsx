import { clsx } from "@clutchd/clsx";
import { Component, ReactPropsWithoutRef } from "@clutchd/component";
import { isEmpty } from "@clutchd/is-empty";
import {
  getColor,
  IWithBorderRadius,
  IWithColor,
  IWithHeight,
  IWithWidth,
} from "@clutchd/tailwind";
import { Text } from "@clutchd/text";
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
  IWithColor,
  IWithHeight,
  IWithWidth,
  ReactPropsWithoutRef<typeof Component.span> {
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
  className,
  fallback = "U",
  height = "h-12",
  src,
  theme = "gray",
  width = "w-12",
  ...props
}: IAvatarProps) {
  const [loadingState, setLoadingState] = useState<boolean>(false);

  const fallbackAvatar = (
    <Text.Text
      fontWeight="font-semibold"
      lineHeight="leading-none"
      className="absolute -translate-x-1/2 -translate-y-1/2 h-fit w-fit inset-1/2"
    >
      {fallback}
    </Text.Text>
  );

  const imageAvatar = (
    <Image
      onLoadStart={() => setLoadingState(true)}
      onLoadingComplete={() => setLoadingState(false)}
      layout="fill"
      objectFit="fill"
      alt={alt ?? ""}
      src={src}
    />
  );

  const classNames = clsx(
    "overflow-hidden relative border",
    getColor(theme, "200").bgColor,
    getColor(theme, "400").borderColor,
    borderRadius,
    height,
    width,
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

export { Avatar };
export type { IAvatarProps, IAvatar };
