import { composeClassNames as cn } from "@clutchd/compose-props";
import type { IImageProps } from "@clutchd/image";
import type { Primitive } from "@radix-ui/react-primitive";
// biome-ignore lint: We actually need react, not just the type
import * as React from "react";
import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  type IAvatarImageProps,
  type IAvatarRoot,
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
    React.ComponentPropsWithoutRef<typeof Primitive.span> {}

/**
 * `Avatar` - An image based component used to render a user's profile picture.
 * @param props `IAvatarProps` used to render this `Avatar`.
 * @returns `Avatar` component.
 */
function Avatar({
  alt = "An avatar image.",
  children = "U",
  className,
  src,
  sizes,
  ...props
}: IAvatarHtmlProps) {
  return (
    <AvatarRoot
      className={cn(
        "relative select-none items-center justify-center truncate inline-flex size-12",
        sizes,
        className,
      )}
      {...props}
    >
      <>
        {src && <AvatarImage alt={alt} src={src} sizes={sizes} />}
        <AvatarFallback className="m-1 truncate">{children}</AvatarFallback>
      </>
    </AvatarRoot>
  );
}

Avatar.displayName = "Avatar";

export { Avatar };
export type { IAvatar, IAvatarHtmlProps, IAvatarProps };
