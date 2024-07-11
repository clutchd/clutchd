import { Component } from "@clutchd/component";
import { composeEventHandlers } from "@clutchd/compose-event-handlers";
import * as React from "react";
import { IImageLoadingStates, IImageRoot, IImageRootProps, ImageRoot } from ".";

/**
 * Type to define `Image` component.
 */
type IImage = IImageRoot;

/**
 * Type to define `Image` props.
 */
interface IImageProps extends IImageRootProps {
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
      React.ComponentPropsWithoutRef<typeof Component.img>,
      "asChild" | "alt" | "src" | "height" | "width"
    > {}

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
      <ImageRoot
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
      </ImageRoot>
    );
  },
);

Image.displayName = "Image";

export { Image };
export type { IImage, IImageHtmlProps, IImageProps };
