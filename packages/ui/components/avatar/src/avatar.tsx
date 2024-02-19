import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { composeClassNames as cn } from "@clutchd/compose-props";
import { IImageProps } from "@clutchd/image";
import type { BorderRadius, Display, Size } from "@clutchd/tailwind";
import * as React from "react";
import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  IAvatarImageProps,
  IAvatarRoot,
} from ".";

/**
 * Type to define `Avatar` element.
 */
type IAvatar = IAvatarRoot;

/**
 * Type to define `Avatar` props.
 */
interface IAvatarProps {
  /**
   * The `alt` attribute for the underlying `Image`.  Defaults to `An avatar image.`.
   */
  alt?: IAvatarImageProps["alt"];
  /**
   * The `src` attribute for the underlying `Image`.
   */
  src?: IAvatarImageProps["src"];
  /**
   * A subset of the `Display` tailwindcss classes.  Defaults to `inline-flex`.
   * @see https://tailwindcss.com/docs/display
   */
  display?: Extract<Display, "flex" | "inline-flex" | "hidden">;
  /**
   * The `rounded` tailwindcss classes, a subset of the `Border Radius` classes.
   * @see https://tailwindcss.com/docs/border-radius
   */
  radius?: BorderRadius;
  /**
   * The `Size` tailwindcss classes.  Defaults to `size-12`.
   * @see https://tailwindcss.com/docs/size
   */
  size?: Size;
  // TODO: make this prop not needed with styled Avatar?
  // Seems like we could get a pixel value based on size class, and since
  // avatar sizes don't change we could only have this prop present as an escape hatch.
  /**
   * A `nextjs/image` prop used to optimize the underlying image.
   * @see https://nextjs.org/docs/pages/api-reference/components/image#sizes
   */
  sizes?: IImageProps["sizes"];
}

/**
 * Type to define `Avatar` props with html attributes.
 */
interface IAvatarHtmlProps
  extends IAvatarProps,
    IComponentPropsWithoutRef<typeof Component.span> {}

/**
 * `Avatar` - An image based component used to render a user's profile picture.
 * @param props `IAvatarProps` used to render this `Avatar`.
 * @returns `Avatar` component.
 */
const Avatar = React.forwardRef<IAvatar, IAvatarHtmlProps>(
  (
    {
      alt = "An avatar image.",
      children = "U",
      className,
      display = "inline-flex",
      radius,
      size = "size-12",
      src,
      // Do NOT have a default value, can cause confusion by
      // potentially rendering poor quality image.
      sizes,
      ...props
    },
    forwardedRef,
  ) => {
    return (
      <AvatarRoot
        className={cn(
          display,
          radius,
          size,
          "relative select-none items-center justify-center truncate",
          sizes,
          className,
        )}
        ref={forwardedRef}
        {...props}
      >
        <>
          {src && <AvatarImage alt={alt} src={src} sizes={sizes} />}
          <AvatarFallback className="m-1 truncate">{children}</AvatarFallback>
        </>
      </AvatarRoot>
    );
  },
);

Avatar.displayName = "Avatar";

export { Avatar };
export type { IAvatar, IAvatarHtmlProps, IAvatarProps };
