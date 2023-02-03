import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { WithColor } from "@clutchd/tailwind";
import { twx } from "@clutchd/twx";
import * as React from "react";
import { getHeadingTheme } from ".";

/**
 * Type to define `H1` element
 */
type IH1 = React.ElementRef<typeof Component.h1>;

/**
 * Type to define `H1` props
 */
interface IH1Props
  extends WithColor,
    IComponentPropsWithoutRef<typeof Component.h1> {}

/**
 * `H1` - A text component used to render an h1 tag
 * @param props `IH1Props` used to render this `H1`
 * @returns `H1` component
 */
const H1 = React.forwardRef<IH1, IH1Props>(
  ({ className, theme = "gray", ...props }, forwardedRef) => {
    return (
      <h1
        className={twx(
          "font-extrabold text-3xl sm:text-4xl mt-0 [&:not(:last-child)]:mb-8",
          getHeadingTheme(theme),
          className
        )}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

H1.displayName = "TextH1";

export { H1 };
export type { IH1, IH1Props };
