import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import {
  getTheme,
  marginXMap,
  marginYMap,
  WithColor,
  WithSpacing,
} from "@clutchd/tailwind";
import { twx } from "@clutchd/twx";
import * as React from "react";

/**
 * Type to define `Divider` element
 */
type IDivider = React.ElementRef<typeof Component.div>;

/**
 * Type to define `Divider` props
 */
interface IDividerProps
  extends WithColor,
    WithSpacing,
    IComponentPropsWithoutRef<typeof Component.div> {
  decorative?: boolean;
  hidden?: boolean;
  orientation?: "horizontal" | "vertical";
}

/**
 * `Divider` - A separator used to create space between elements
 * @param props `IDividerProps` used to render this `Divider`
 * @returns `Divider` component
 */
const Divider = React.forwardRef<IDivider, IDividerProps>(
  (
    {
      children,
      className,
      decorative = false,
      hidden = false,
      orientation = "horizontal",
      spacing = "6",
      theme = "gray",
      ...props
    },
    forwardedRef
  ) => {
    // define aria props
    const aria = decorative
      ? { role: "none" }
      : { "aria-orientation": orientation, role: "separator" };

    return (
      <Component.div
        {...aria}
        className={twx(
          "rounded-lg",
          hidden
            ? "bg-inherit"
            : getTheme(theme, {
                slate: "bg-slate-200 dark:bg-slate-700",
                gray: "bg-gray-200 dark:bg-gray-700",
                zinc: "bg-zinc-200 dark:bg-zinc-700",
                neutral: "bg-neutral-200 dark:bg-neutral-700",
                stone: "bg-stone-200 dark:bg-stone-700",
                red: "bg-red-200 dark:bg-red-700",
                orange: "bg-orange-200 dark:bg-orange-700",
                amber: "bg-amber-200 dark:bg-amber-700",
                yellow: "bg-yellow-200 dark:bg-yellow-700",
                lime: "bg-lime-200 dark:bg-lime-700",
                green: "bg-green-200 dark:bg-green-700",
                emerald: "bg-emerald-200 dark:bg-emerald-700",
                teal: "bg-teal-200 dark:bg-teal-700",
                cyan: "bg-cyan-200 dark:bg-cyan-700",
                sky: "bg-sky-200 dark:bg-sky-700",
                blue: "bg-blue-200 dark:bg-blue-700",
                indigo: "bg-indigo-200 dark:bg-indigo-700",
                violet: "bg-violet-200 dark:bg-violet-700",
                purple: "bg-purple-200 dark:bg-purple-700",
                fuchsia: "bg-fuchsia-200 dark:bg-fuchsia-700",
                pink: "bg-pink-200 dark:bg-pink-700",
                rose: "bg-rose-200 dark:bg-rose-700",
              }),
          orientation === "horizontal"
            ? `${marginYMap[spacing]} h-px`
            : `${marginXMap[spacing]} w-px`,
          className
        )}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";

export { Divider };
export type { IDivider, IDividerProps };
