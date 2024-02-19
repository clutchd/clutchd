import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { composeEventHandlers } from "@clutchd/compose-event-handlers";
import { ImageProps, default as NextImage } from "next/image";
import * as React from "react";

/**
 * Type to define `Image` component.
 */
type IImage = React.ElementRef<typeof Component.img>;

/**
 * Type to define loading states of the `Image`.
 */
type IImageLoadingStates = "idle" | "loading" | "loaded" | "error";

/**
 * Type to define `Image` props.
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
      IComponentPropsWithoutRef<typeof Component.img>,
      "asChild" | "alt" | "src" | "height" | "width"
    > {}

/**
 * `RootImage` - The root image component used to render next/image components.
 * @param props `IImageHtmlProps` used to render this `RootImage`.
 * @returns `RootImage` component.
 */
const RootImage = React.forwardRef<IImage, IImageHtmlProps>(
  ({ alt, children, src, ...props }, forwardedRef) => {
    return (
      <Component.img asChild {...props}>
        <NextImage alt={alt} ref={forwardedRef} src={src}>
          {children}
        </NextImage>
      </Component.img>
    );
  },
);

RootImage.displayName = "RootImage";

/**
 * `Image` - A image component used to render next/image components with corresponding data attributes.
 * @param props `IImageHtmlProps` used to render this `Image`.
 * @returns `Image` component.
 */
const Image = React.forwardRef<IImage, IImageHtmlProps>(
  (
    { children, handleStateChange, onError, onLoad, onLoadStart, ...props },
    forwardedRef,
  ) => {
    const [loading, setLoading] = React.useState<IImageLoadingStates>("idle");

    const updateState = (state: IImageLoadingStates) => {
      setLoading(state);
      handleStateChange && handleStateChange(state);
    };

    return (
      <RootImage
        {...props}
        ref={forwardedRef}
        onError={composeEventHandlers(() => updateState("error"), onError)}
        onLoad={composeEventHandlers(() => updateState("loaded"), onLoad)}
        onLoadStart={composeEventHandlers(
          () => updateState("loading"),
          onLoadStart,
        )}
        data-state={loading}
      >
        {children}
      </RootImage>
    );
  },
);

Image.displayName = "Image";

export { RootImage, Image };
export type { IImage, IImageHtmlProps, IImageLoadingStates, IImageProps };
