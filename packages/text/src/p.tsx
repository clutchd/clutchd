import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { getTheme, WithColor } from "@clutchd/tailwind";
import { twx } from "@clutchd/twx";
import * as React from "react";

/**
 * Type to define `P` element
 */
type IP = React.ElementRef<typeof Component.p>;

/**
 * Type to define `P` props
 */
interface IPProps
  extends WithColor,
    IComponentPropsWithoutRef<typeof Component.p> {}

/**
 * `P` - A standard text component used to render a p tag
 * @param props `IPProps` used to render this `P`
 * @returns `P` component
 */
const P = React.forwardRef<IP, IPProps>(
  ({ className, theme = "gray", ...props }, forwardedRef) => {
    return (
      <p
        className={twx(
          "font-baseline text-sm sm:text-base lg:text-lg [&:not(:first-child)]:mt-6 [&:not(:last-child)]:mb-6",
          getTheme(theme, {
            slate: "text-slate-700 dark:text-slate-300",
            gray: "text-gray-700 dark:text-gray-300",
            zinc: "text-zinc-700 dark:text-zinc-300",
            neutral: "text-neutral-700 dark:text-neutral-300",
            stone: "text-stone-700 dark:text-stone-300",
            red: "text-red-700 dark:text-red-300",
            orange: "text-orange-700 dark:text-orange-300",
            amber: "text-amber-700 dark:text-amber-300",
            yellow: "text-yellow-700 dark:text-yellow-300",
            lime: "text-lime-700 dark:text-lime-300",
            green: "text-green-700 dark:text-green-300",
            emerald: "text-emerald-700 dark:text-emerald-300",
            teal: "text-teal-700 dark:text-teal-300",
            cyan: "text-cyan-700 dark:text-cyan-300",
            sky: "text-sky-700 dark:text-sky-300",
            blue: "text-blue-700 dark:text-blue-300",
            indigo: "text-indigo-700 dark:text-indigo-300",
            violet: "text-violet-700 dark:text-violet-300",
            purple: "text-purple-700 dark:text-purple-300",
            fuchsia: "text-fuchsia-700 dark:text-fuchsia-300",
            pink: "text-pink-700 dark:text-pink-300",
            rose: "text-rose-700 dark:text-rose-300",
          }),
          className
        )}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

P.displayName = "TextP";

export { P };
export type { IP, IPProps };
