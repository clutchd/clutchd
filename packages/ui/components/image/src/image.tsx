import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { composeEventHandlers } from "@clutchd/compose-event-handlers";
import { ImageProps, default as NextImage } from "next/image";
import * as React from "react";

/**
 * Type to define `Image` component
 */
type IImage = React.ElementRef<typeof Component.img>;

/**
 * Type to define loading states of the `Image`
 */
type IImageLoadingStates = "idle" | "loading" | "loaded" | "error";

/**
 * Type to define `Image` props
 */
interface IImageProps
  extends Omit<
    ImageProps,
    | "onLoadingComplete"
    | "layout"
    | "objectFit"
    | "objectPosition"
    | "lazyBoundary"
    | "lazyRoot"
  > {
  handleStateChange?: (state: IImageLoadingStates) => void;
}

/**
 * Type to define `Image` props with html attributes
 */
interface IImageHtmlProps
  extends IImageProps,
    Omit<
      IComponentPropsWithoutRef<typeof Component.img>,
      "asChild" | "alt" | "src" | "height" | "width"
    > {}

/**
 * `Image` - A image component used to render next/image components with data attributes
 * @param props `IImageHtmlProps` used to render this `Image`
 * @returns `Image` component
 */
const Image = React.forwardRef<IImage, IImageHtmlProps>(
  (
    {
      alt,
      children,
      handleStateChange,
      onError,
      onLoad,
      onLoadStart,
      src,
      ...props
    },
    forwardedRef,
  ) => {
    const [loading, setLoading] = React.useState<IImageLoadingStates>("idle");

    const updateState = (state: IImageLoadingStates) => {
      setLoading(state);
      handleStateChange && handleStateChange(state);
    };

    return (
      <Component.img asChild {...props}>
        <NextImage
          alt={alt}
          ref={forwardedRef}
          src={src}
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
      </Component.img>
    );
  },
);

Image.displayName = "Image";

export { Image };
export type { IImage, IImageHtmlProps, IImageLoadingStates, IImageProps };
