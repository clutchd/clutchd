import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { getTheme, WithColor } from "@clutchd/tailwind";
import { twx } from "@clutchd/twx";
import * as React from "react";

/**
 * Type to define `Large` element
 */
type ILarge = React.ElementRef<typeof Component.p>;

/**
 * Type to define `Large` props
 */
interface ILargeProps
  extends WithColor,
    IComponentPropsWithoutRef<typeof Component.p> {}

/**
 * `Large` - A large text component intended for large copy
 * @param props `ILargeProps` used to render this `Large`
 * @returns `Large` component
 */
const Large = React.forwardRef<ILarge, ILargeProps>(
  ({ className, theme = "gray", ...props }, forwardedRef) => {
    return (
      <p
        className={twx(
          "text-lg font-semibold",
          getTheme(theme, {
            slate: "text-slate-900 dark:text-slate-50",
            gray: "text-gray-900 dark:text-gray-50",
            zinc: "text-zinc-900 dark:text-zinc-50",
            neutral: "text-neutral-900 dark:text-neutral-50",
            stone: "text-stone-900 dark:text-stone-50",
            red: "text-red-900 dark:text-red-50",
            orange: "text-orange-900 dark:text-orange-50",
            amber: "text-amber-900 dark:text-amber-50",
            yellow: "text-yellow-900 dark:text-yellow-50",
            lime: "text-lime-900 dark:text-lime-50",
            green: "text-green-900 dark:text-green-50",
            emerald: "text-emerald-900 dark:text-emerald-50",
            teal: "text-teal-900 dark:text-teal-50",
            cyan: "text-cyan-900 dark:text-cyan-50",
            sky: "text-sky-900 dark:text-sky-50",
            blue: "text-blue-900 dark:text-blue-50",
            indigo: "text-indigo-900 dark:text-indigo-50",
            violet: "text-violet-900 dark:text-violet-50",
            purple: "text-purple-900 dark:text-purple-50",
            fuchsia: "text-fuchsia-900 dark:text-fuchsia-50",
            pink: "text-pink-900 dark:text-pink-50",
            rose: "text-rose-900 dark:text-rose-50",
          }),
          className
        )}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

Large.displayName = "TextLarge";

export { Large };
export type { ILarge, ILargeProps };
