import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { composeClassNames as cn } from "@clutchd/compose-props";
import { WithDisplay, WithTextOverflow } from "@clutchd/tailwind";
import * as React from "react";

/**
 * Type to define `IAvatarFallback` element
 */
type IAvatarFallback = React.ElementRef<typeof Component.span>;

/**
 * Type to define `AvatarFallback` props
 */
interface IAvatarFallbackProps extends WithDisplay, WithTextOverflow {}

/**
 * Type to define `AvatarFallback` props with html attributes
 */
interface IAvatarFallbackHtmlProps
  extends IAvatarFallbackProps,
    IComponentPropsWithoutRef<typeof Component.span> {}

/**
 * `AvatarFallback` - A text component used to render a avatar's fallback if an image is not provided to an `Avatar`
 * @param props `IAvatarProps` used to render this `Avatar`
 * @returns `AvatarFallback` component
 */
const AvatarFallback = React.forwardRef<
  IAvatarFallback,
  IAvatarFallbackHtmlProps
>(
  (
    {
      children = "U",
      className,
      display = "block",
      textOverflow = "truncate",
      ...props
    },
    forwardedRef,
  ) => {
    return (
      <span
        className={cn(display, textOverflow, className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </span>
    );
  },
);

AvatarFallback.displayName = "AvatarFallback";

export { AvatarFallback };
export type { IAvatarFallback, IAvatarFallbackHtmlProps, IAvatarFallbackProps };
