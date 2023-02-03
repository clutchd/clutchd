import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { WithColor } from "@clutchd/tailwind";
import { twx } from "@clutchd/twx";
import * as React from "react";
import { getHeadingTheme } from ".";

/**
 * Type to define `H3` element
 */
type IH3 = React.ElementRef<typeof Component.h3>;

/**
 * Type to define `H3` props
 */
interface IH3Props
  extends WithColor,
    IComponentPropsWithoutRef<typeof Component.h3> {}

/**
 * `H3` - A text component used to render an h3 tag
 * @param props `IH3Props` used to render this `H3`
 * @returns `H3` component
 */
const H3 = React.forwardRef<IH3, IH3Props>(
  ({ className, theme = "gray", ...props }, forwardedRef) => {
    return (
      <h3
        className={twx(
          "font-bold text-xl sm:text-2xl [&:not(:first-child)]:mt-10 [&:not(:last-child)]:mb-4",
          getHeadingTheme(theme),
          className
        )}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

H3.displayName = "TextH3";

export { H3 };
export type { IH3, IH3Props };
