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
import * as React from "react";

/**
 * Type to define `Avatar` element
 */
type IAvatar = React.ElementRef<typeof Component.span>;

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
const Avatar = React.forwardRef<IAvatar, IAvatarProps>(
  (
    {
      alt = "",
      borderRadius = "rounded-full",
      borderWidth = "border",
      children = "U",
      className,
      size = "12",
      src,
      theme = "gray",
      ...props
    },
    forwardedRef
  ) => {
    const [loadingState, setLoadingState] =
      React.useState<IAvatarLoadingStates>("idle");

    function AvatarFallback() {
      return (
        <span
          className={clsx(
            "flex items-center justify-center w-full h-full font-semibold overflow-hidden",
            theme && getBgColor(theme, "100"),
            theme && getTextColor(theme, "500"),
            borderRadius
          )}
        >
          {children}
        </span>
      );
    }
    AvatarFallback.displayName = "AvatarFallback";

    function AvatarImage() {
      return (
        <Image
          onLoadStart={() => setLoadingState("loading")}
          onLoadingComplete={() => setLoadingState("loaded")}
          onError={() => setLoadingState("error")}
          className={clsx("flex-none object-cover", borderRadius)}
          height={getSizePx(size)}
          width={getSizePx(size)}
          alt={alt}
          src={src}
          quality={100}
        />
      );
    }
    AvatarImage.displayName = "AvatarImage";

    return (
      <Component.span
        className={clsx(
          "inline-flex items-center justify-center align-middle select-none overflow-hidden",
          getBorderColor(theme, "300"),
          getSize(size),
          borderRadius,
          borderWidth,
          className
        )}
        ref={forwardedRef}
        {...props}
      >
        <>
          {src && <AvatarImage />}
          {loadingState !== "loaded" && <AvatarFallback />}
        </>
      </Component.span>
    );
  }
);

Avatar.displayName = "Avatar";

export { Avatar };
export type { IAvatarProps, IAvatar };
