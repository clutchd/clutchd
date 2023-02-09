import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { getTheme, WithColor } from "@clutchd/tailwind";
import { twx } from "@clutchd/twx";
import * as React from "react";

/**
 * Type to define `Subtle` element
 */
type ISubtle = React.ElementRef<typeof Component.p>;

/**
 * Type to define `Subtle` props
 */
interface ISubtleProps
  extends WithColor,
  IComponentPropsWithoutRef<typeof Component.p> { }

/**
 * `Subtle` - A small text component intended for subtle copy
 * @param props `ISubtleProps` used to render this `Subtle`
 * @returns `Subtle` component
 */
const Subtle = React.forwardRef<ISubtle, ISubtleProps>(
  ({ className, theme = "gray", ...props }, forwardedRef) => {
    return (
      <p
        className={twx(
          "text-xs sm:text-sm",
          getTheme(theme, {
            slate: "text-slate-500 dark:text-slate-400",
            gray: "text-gray-500 dark:text-gray-400",
            zinc: "text-zinc-500 dark:text-zinc-400",
            neutral: "text-neutral-500 dark:text-neutral-400",
            stone: "text-stone-500 dark:text-stone-400",
            red: "text-red-500 dark:text-red-400",
            orange: "text-orange-500 dark:text-orange-400",
            amber: "text-amber-500 dark:text-amber-400",
            yellow: "text-yellow-500 dark:text-yellow-400",
            lime: "text-lime-500 dark:text-lime-400",
            green: "text-green-500 dark:text-green-400",
            emerald: "text-emerald-500 dark:text-emerald-400",
            teal: "text-teal-500 dark:text-teal-400",
            cyan: "text-cyan-500 dark:text-cyan-400",
            sky: "text-sky-500 dark:text-sky-400",
            blue: "text-blue-500 dark:text-blue-400",
            indigo: "text-indigo-500 dark:text-indigo-400",
            violet: "text-violet-500 dark:text-violet-400",
            purple: "text-purple-500 dark:text-purple-400",
            fuchsia: "text-fuchsia-500 dark:text-fuchsia-400",
            pink: "text-pink-500 dark:text-pink-400",
            rose: "text-rose-500 dark:text-rose-400",
          }),
          className
        )}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

Subtle.displayName = "TextSubtle";

export { Subtle };
export type { ISubtle, ISubtleProps };
