import {
  type IImage,
  type IImageHtmlProps,
  type IImageProps,
  Image,
} from "@clutchd/image";
import * as React from "react";
import { AvatarContext, type IWithAvatarContext } from "./_context";

/**
 * Type to define `AvatarImage` element.
 */
type IAvatarImage = IImage;

/**
 * Type to define `AvatarImage` props.
 */
interface IAvatarImageProps extends IImageProps, IWithAvatarContext {}

/**
 * Type to define `AvatarImage` props with html attributes.
 */
interface IAvatarImageHtmlProps extends IAvatarImageProps, IImageHtmlProps {}

/**
 * `Avatar` - An image based component used to render a user's profile picture.
 * @param props `IAvatarProps` used to render this `Avatar`.
 * @returns `Avatar` component.
 */
function AvatarImage({
  _context = AvatarContext,
  fill = true,
  src,
  ...props
}: IAvatarImageHtmlProps) {
  if (!src) return null;
  const context = React.useContext(_context);
  return (
    <Image
      handleStateChange={context.onLoadingStateChange}
      fill={fill}
      src={src}
      {...props}
    />
  );
}

AvatarImage.displayName = "AvatarImage";

export { AvatarImage };
export type { IAvatarImage, IAvatarImageHtmlProps, IAvatarImageProps };
