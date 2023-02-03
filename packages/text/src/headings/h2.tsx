import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { WithColor } from "@clutchd/tailwind";
import { twx } from "@clutchd/twx";
import * as React from "react";
import { getHeadingTheme } from ".";

/**
 * Type to define `H2` element
 */
type IH2 = React.ElementRef<typeof Component.h2>;

/**
 * Type to define `H2` props
 */
interface IH2Props
  extends WithColor,
    IComponentPropsWithoutRef<typeof Component.h2> {}

/**
 * `H2` - A text component used to render an h2 tag
 * @param props `IH2Props` used to render this `H2`
 * @returns `H2` component
 */
const H2 = React.forwardRef<IH2, IH2Props>(
  ({ className, theme = "gray", ...props }, forwardedRef) => {
    return (
      <h2
        className={twx(
          "font-bold text-2xl sm:text-3xl [&:not(:first-child)]:mt-10 [&:not(:last-child)]:mb-6",
          getHeadingTheme(theme),
          className
        )}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

H2.displayName = "TextH2";

export { H2 };
export type { IH2, IH2Props };
