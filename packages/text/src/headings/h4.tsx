import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { WithColor } from "@clutchd/tailwind";
import { twx } from "@clutchd/twx";
import * as React from "react";
import { getHeadingTheme } from ".";

/**
 * Type to define `H4` element
 */
type IH4 = React.ElementRef<typeof Component.h4>;

/**
 * Type to define `H4` props
 */
interface IH4Props
  extends WithColor,
    IComponentPropsWithoutRef<typeof Component.h4> {}

/**
 * `H4` - A text component used to render an h4 tag
 * @param props `IH4Props` used to render this `H4`
 * @returns `H4` component
 */
const H4 = React.forwardRef<IH4, IH4Props>(
  ({ className, theme = "gray", ...props }, forwardedRef) => {
    return (
      <h4
        className={twx(
          "font-semibold text-lg sm:text-xl mt-8 mb-2",
          getHeadingTheme(theme),
          className
        )}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

H4.displayName = "TextH4";

export { H4 };
export type { IH4, IH4Props };
