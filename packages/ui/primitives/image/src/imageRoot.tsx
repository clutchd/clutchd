import { Component } from "@clutchd/component";
import { type ImageProps, default as NextImage } from "next/image";
import * as React from "react";

/**
 * Type to define loading states of the `Image`.
 */
type IImageLoadingStates = "idle" | "loading" | "loaded" | "error";

/**
 * Type to define `ImageRoot` component.
 */
type IImageRoot = React.ElementRef<typeof Component.img>;

/**
 * Type to define `ImageRoot` props.
 */
interface IImageRootProps
  extends Omit<
    ImageProps,
    | "onLoadingComplete"
    | "layout"
    | "objectFit"
    | "objectPosition"
    | "lazyBoundary"
    | "lazyRoot"
  > {}

/**
 * Type to define `ImageRoot` props with html attributes.
 */
interface IImageRootHtmlProps
  extends IImageRootProps,
    Omit<
      React.ComponentPropsWithoutRef<typeof Component.img>,
      "asChild" | "alt" | "src" | "height" | "width"
    > {}

/**
 * `ImageRoot` - The root image component used to render next/image components.
 * @param props `IImageRootHtmlProps` used to render this `ImageRoot`.
 * @returns `ImageRoot` component.
 */
const ImageRoot = React.forwardRef<IImageRoot, IImageRootHtmlProps>(
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

ImageRoot.displayName = "ImageRoot";

export { ImageRoot };
export type {
  IImageLoadingStates,
  IImageRoot,
  IImageRootHtmlProps,
  IImageRootProps,
};
