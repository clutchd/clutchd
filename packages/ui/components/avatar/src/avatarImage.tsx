import {
  IImage,
  IImageHtmlProps,
  IImageLoadingStates,
  IImageProps,
  Image,
} from "@clutchd/image";
import * as React from "react";

/**
 * Type to define `AvatarImage` element
 */
type IAvatarImage = IImage;

/**
 * Type to define `AvatarImage` props
 */
interface IAvatarImageProps extends IImageProps {
  handleStateChange?: (state: IImageLoadingStates) => void;
}

/**
 * Type to define `AvatarImage` props with html attributes
 */
interface IAvatarImageHtmlProps extends IAvatarImageProps, IImageHtmlProps {}

/**
 * `Avatar` - An image based component used to render a user's profile picture
 * @param props `IAvatarProps` used to render this `Avatar`
 * @returns `Avatar` component
 */
const AvatarImage = React.forwardRef<IAvatarImage, IAvatarImageHtmlProps>(
  ({ fill = true, ...props }, forwardedRef) => {
    return <Image fill={fill} ref={forwardedRef} {...props} />;
  },
);

AvatarImage.displayName = "AvatarImage";

export { AvatarImage };
export type { IAvatarImage, IAvatarImageProps, IAvatarImageHtmlProps };
