import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import {
  getSize,
  getSizePx,
  getTheme,
  WithBorderRadius,
  WithBorderWidth,
  WithColor,
  WithSize,
} from "@clutchd/tailwind";
import { twx } from "@clutchd/twx";
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
  extends WithBorderRadius,
  WithBorderWidth,
  WithColor,
  WithSize,
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
          className={twx(
            "flex items-center justify-center w-full h-full overflow-hidden",
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
          className={twx("flex-none object-cover", borderRadius)}
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
        className={twx(
          "inline-flex items-center justify-center w-full h-full align-middle select-none font-semibold overflow-hidden",
          getTheme(theme, {
            slate: "bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-400 text-slate-500 dark:text-slate-400 ",
            gray: "bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-400 text-gray-500 dark:text-gray-400",
            zinc: "bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-400 text-zinc-500 dark:text-zinc-400",
            neutral: "bg-neutral-100 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-400 text-neutral-500 dark:text-neutral-400",
            stone: "bg-stone-100 dark:bg-stone-800 border-stone-300 dark:border-stone-400 text-stone-500 dark:text-stone-400",
            red: "bg-red-100 dark:bg-red-900 border-red-300 dark:border-red-400 text-red-500 dark:text-red-300",
            orange: "bg-orange-100 dark:bg-orange-900 border-orange-300 dark:border-orange-400 text-orange-500 dark:text-orange-300",
            amber: "bg-amber-100 dark:bg-amber-900 border-amber-300 dark:border-amber-400 text-amber-500 dark:text-amber-300",
            yellow: "bg-yellow-100 dark:bg-yellow-900 border-yellow-300 dark:border-yellow-400 text-yellow-500 dark:text-yellow-300",
            lime: "bg-lime-100 dark:bg-lime-900 border-lime-300 dark:border-lime-400 text-lime-500 dark:text-lime-300",
            green: "bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-400 text-green-500 dark:text-green-300",
            emerald: "bg-emerald-100 dark:bg-emerald-900 border-emerald-300 dark:border-emerald-400 text-emerald-500 dark:text-emerald-300",
            teal: "bg-teal-100 dark:bg-teal-900 border-teal-300 dark:border-teal-400 text-teal-500 dark:text-teal-300",
            cyan: "bg-cyan-100 dark:bg-cyan-900 border-cyan-300 dark:border-cyan-400 text-cyan-500 dark:text-cyan-300",
            sky: "bg-sky-100 dark:bg-sky-900 border-sky-300 dark:border-sky-400 text-sky-500 dark:text-sky-300",
            blue: "bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-400 text-blue-500 dark:text-blue-300",
            indigo: "bg-indigo-100 dark:bg-indigo-900 border-indigo-300 dark:border-indigo-400 text-indigo-500 dark:text-indigo-300",
            violet: "bg-violet-100 dark:bg-violet-900 border-violet-300 dark:border-violet-400 text-violet-500 dark:text-violet-300",
            purple: "bg-purple-100 dark:bg-purple-900 border-purple-300 dark:border-purple-400 text-purple-500 dark:text-purple-300",
            fuchsia: "bg-fuchsia-100 dark:bg-fuchsia-900 border-fuchsia-300 dark:border-fuchsia-400 text-fuchsia-500 dark:text-fuchsia-300",
            pink: "bg-pink-100 dark:bg-pink-900 border-pink-300 dark:border-pink-400 text-pink-500 dark:text-pink-300",
            rose: "bg-rose-100 dark:bg-rose-900 border-rose-300 dark:border-rose-400 text-rose-500 dark:text-rose-300",
          }),
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
