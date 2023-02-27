import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { getTheme, WithColor } from "@clutchd/tailwind";
import { twx } from "@clutchd/twx";
import NextLink from "next/link";
import * as React from "react";

/**
 * Type to define `A` element
 */
type IA = React.ElementRef<typeof Component.a>;

/**
 * Type to define `A` props
 */
interface IAProps
  extends WithColor,
    IComponentPropsWithoutRef<typeof Component.a> {}

/**
 * `A` - A simple text link component, leverages next/link
 * @param props `IAProps` used to render this `A`
 * @returns `A` component
 */
const A = React.forwardRef<IA, IAProps>(
  ({ className, href = "/", theme = "gray", ...props }, forwardedRef) => {
    const classNames = twx(
      "cursor-pointer font-medium underline underline-offset-4",
      getTheme(theme, {
        slate: "text-slate-600 dark:text-slate-400",
        gray: "text-gray-600 dark:text-gray-400",
        zinc: "text-zinc-600 dark:text-zinc-400",
        neutral: "text-neutral-600 dark:text-neutral-400",
        stone: "text-stone-600 dark:text-stone-400",
        red: "text-red-600 dark:text-red-400",
        orange: "text-orange-600 dark:text-orange-400",
        amber: "text-amber-600 dark:text-amber-400",
        yellow: "text-yellow-600 dark:text-yellow-400",
        lime: "text-lime-600 dark:text-lime-400",
        green: "text-green-600 dark:text-green-400",
        emerald: "text-emerald-600 dark:text-emerald-400",
        teal: "text-teal-600 dark:text-teal-400",
        cyan: "text-cyan-600 dark:text-cyan-400",
        sky: "text-sky-600 dark:text-sky-400",
        blue: "text-blue-600 dark:text-blue-400",
        indigo: "text-indigo-600 dark:text-indigo-400",
        violet: "text-violet-600 dark:text-violet-400",
        purple: "text-purple-600 dark:text-purple-400",
        fuchsia: "text-fuchsia-600 dark:text-fuchsia-400",
        pink: "text-pink-600 dark:text-pink-400",
        rose: "text-rose-600 dark:text-rose-400",
      }),
      className
    );

    return (
      <NextLink
        className={classNames}
        href={href}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

A.displayName = "TextA";

export { A };
export type { IAProps, IA };
