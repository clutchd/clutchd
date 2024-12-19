import { composeEventHandlers } from "@clutchd/compose-event-handlers";
import {
  default as NextImage,
  type ImageProps as NextImageProps,
} from "next/image";
import * as React from "react";

/**
 * Type to define loading states of the `Image`.
 */
type IImageLoadingStates = "idle" | "loading" | "loaded" | "error";

/**
 * Type to define `Image` component.
 */
type IImage = typeof NextImage;

/**
 * Type to define `Image` props.
 */
interface IImageProps extends NextImageProps {
  /**
   * Optional prop to introduce functionality when the image's loading state changes.
   */
  handleStateChange?: (state: IImageLoadingStates) => void;
}

/**
 * Type to define `Image` props with html attributes.
 */
interface IImageHtmlProps
  extends IImageProps,
  Omit<
    React.HTMLAttributes<HTMLImageElement>,
    "alt" | "src" | "height" | "width"
  > { }

/**
 * `Image` - A image component used to render next/image components with corresponding data attributes.
 * @param props `IImageHtmlProps` used to render this `Image`.
 * @returns `Image` component.
 */
function Image({
  children,
  handleStateChange,
  onError,
  onLoad,
  onLoadStart,
  ...props
}: IImageHtmlProps) {
  const [loading, setLoading] = React.useState<IImageLoadingStates>("idle");

  const updateState = (state: IImageLoadingStates) => {
    setLoading(state);
    handleStateChange?.(state);
  };

  return (
    <NextImage
      {...props}
      onError={composeEventHandlers(() => updateState("error"), onError)}
      onLoad={composeEventHandlers(() => updateState("loaded"), onLoad)}
      onLoadStart={composeEventHandlers(
        () => updateState("loading"),
        onLoadStart,
      )}
      data-state={loading}
    >
      {children}
    </NextImage>
  );
}

Image.displayName = "Image";

export { Image };
export type { IImageLoadingStates, IImage, IImageHtmlProps, IImageProps };
