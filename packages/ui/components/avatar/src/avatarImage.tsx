import { IImage, IImageHtmlProps, IImageProps, Image } from "@clutchd/image";
import * as React from "react";
import { AvatarContext, IWithAvatarContext } from "./_context";

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
const AvatarImage = React.forwardRef<IAvatarImage, IAvatarImageHtmlProps>(
  ({ _context = AvatarContext, fill = true, src, ...props }, forwardedRef) => {
    if (!src) return null;
    const context = React.useContext(_context);
    return (
      <Image
        handleStateChange={context.onLoadingStateChange}
        fill={fill}
        src={src}
        ref={forwardedRef}
        {...props}
      />
    );
  },
);

AvatarImage.displayName = "AvatarImage";

export { AvatarImage };
export type { IAvatarImage, IAvatarImageHtmlProps, IAvatarImageProps };
