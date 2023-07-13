import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { WithBorderRadius, WithHeight, WithWidth } from "@clutchd/tailwind";
import Image from "next/image";
import * as React from "react";

/**
 * Type to define `Avatar` element
 */
type IAvatar = React.ElementRef<typeof Component.span>;

/**
 * Type to define `Avatar` props
 */
interface IAvatarProps extends WithBorderRadius, WithHeight, WithWidth {
  src: string;
  alt?: string;
}

type IAvatarLoadingStates = "idle" | "loading" | "loaded" | "error";

/**
 * `Avatar` - An image based component used to render a user's profile picture
 * @param props `IAvatarProps` used to render this `Avatar`
 * @returns `Avatar` component
 */
const Avatar = React.forwardRef<
  IAvatar,
  IAvatarProps & IComponentPropsWithoutRef<typeof Component.span>
>(
  (
    {
      alt = "",
      borderRadius = "rounded-full",
      children = "U",
      className,
      height = "h-12",
      src,
      width = "w-12",
      ...props
    },
    forwardedRef
  ) => {
    const [loadingState, setLoadingState] =
      React.useState<IAvatarLoadingStates>("idle");

    function AvatarFallback() {
      return (
        <span
          className={[
            "flex items-center justify-center w-full h-full overflow-hidden",
            borderRadius,
          ].join(" ")}
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
          className={["flex-none object-cover", borderRadius].join(" ")}
          // height={getSizePx(size)}
          // width={getSizePx(size)}
          alt={alt}
          src={src}
          quality={100}
        />
      );
    }
    AvatarImage.displayName = "AvatarImage";

    // TODO: Bring back theming
    return (
      <Component.span
        className={[
          "inline-flex items-center justify-center align-middle select-none font-semibold overflow-hidden border",
          "bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-400 text-gray-500 dark:text-gray-400",
          ,
          borderRadius,
          height,
          width,
          className,
        ].join(" ")}
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
export type { IAvatar, IAvatarProps };
