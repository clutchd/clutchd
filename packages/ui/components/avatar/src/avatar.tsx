import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { composeClassNames as cn } from "@clutchd/compose-props";
import { IImageLoadingStates } from "@clutchd/image";
import type {
  WithAlignItems,
  WithDisplay,
  WithJustifyContent,
  WithOverflow,
  WithPosition,
  WithSize,
  WithUserSelect,
} from "@clutchd/tailwind";
import * as React from "react";
import { AvatarFallback, AvatarImage, IAvatarImageProps } from "./";

/**
 * Type to define `Avatar` element
 */
type IAvatar = React.ElementRef<typeof Component.div>;

/**
 * Type to define `Avatar` props
 */
interface IAvatarProps
  extends WithAlignItems,
    WithDisplay,
    WithJustifyContent,
    WithOverflow,
    WithPosition,
    WithSize,
    WithUserSelect {
  alt?: IAvatarImageProps["alt"];
  src?: IAvatarImageProps["src"];
}

/**
 * Type to define `Avatar` props with html attributes
 */
interface IAvatarHtmlProps
  extends IAvatarProps,
    IComponentPropsWithoutRef<typeof Component.span> {}

/**
 * `Avatar` - An image based component used to render a user's profile picture
 * @param props `IAvatarProps` used to render this `Avatar`
 * @returns `Avatar` component
 */
const Avatar = React.forwardRef<IAvatar, IAvatarHtmlProps>(
  (
    {
      alt = "An avatar image",
      alignItems = "items-center",
      children = "U",
      className,
      display = "inline-flex",
      justifyContent = "justify-center",
      overflow = "overflow-hidden",
      position = "relative",
      size = "size-12",
      src,
      userSelect = "select-none",
      ...props
    },
    forwardedRef,
  ) => {
    const [state, setState] = React.useState("idle");

    const updateState = (state: IImageLoadingStates) => {
      setState(state);
    };

    return (
      <Component.div
        // TODO: Add theming? Old styles here
        // "border font-semibold border-gray-300 bg-gray-100 text-gray-500 dark:border-gray-400 dark:bg-gray-800 dark:text-gray-400",
        className={cn(
          alignItems,
          display,
          justifyContent,
          overflow,
          position,
          size,
          userSelect,
          className,
        )}
        data-state={state}
        ref={forwardedRef}
        {...props}
      >
        <>
          {src && (
            <AvatarImage alt={alt} handleStateChange={updateState} src={src} />
          )}
          {state !== "loaded" && <AvatarFallback>{children}</AvatarFallback>}
        </>
      </Component.div>
    );
  },
);

Avatar.displayName = "Avatar";

export { Avatar };
export type { IAvatar, IAvatarHtmlProps, IAvatarProps };
