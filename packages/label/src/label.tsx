import { twx } from "@clutchd/twx";
import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { composePreventableEventHandlers } from "@clutchd/compose-event-handlers";
import { getTheme, WithColor } from "@clutchd/tailwind";
import * as React from "react";

/**
 * Type to define `Label` component
 */
type ILabel = React.ElementRef<typeof Component.label>;

/**
 * Type to define `Label` props
 */
interface ILabelProps
  extends WithColor,
  IComponentPropsWithoutRef<typeof Component.label> {
  text?: React.ReactNode;
  required?: boolean;
}

/**
 * `Label` - A label component used to render accessible labels
 * @param props `ILabelProps` used to render this `Label`
 * @returns `Label` component
 */
const Label = React.forwardRef<ILabel, ILabelProps>(
  (
    {
      className,
      children,
      text,
      onMouseDown,
      required = false,
      theme = "gray",
      ...props
    },
    forwardedRef
  ) => {
    // content states
    const [spanContent, setSpanContent] = React.useState(text);
    const [childrenContent, setChildrenContent] = React.useState(children);

    // update content states based on props
    React.useEffect(() => {
      if (text) {
        setSpanContent(text);
        setChildrenContent(children);
      } else if (children) {
        setSpanContent(children);
        setChildrenContent(null);
      } else {
        setSpanContent(null);
        setChildrenContent(null);
        console.warn("No content provided for label.");
      }
    }, [children, text]);

    // create ref for label span
    const spanRef = React.createRef<HTMLSpanElement>();

    // create component for label content
    let labelContent = (
      <>
        <span
          className={twx(
            "flex h-full w-full font-baseline font-medium text-sm sm:text-base lg:text-lg rounded-md",
            required && "after:content-['*'] after:ml-1 after:text-red-400",
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
            })
          )}
          ref={spanRef}
        >
          {spanContent}
        </span>
        {childrenContent}
      </>
    );

    // disable the label's text highlight
    const disableLabelHighlight = (
      event: React.MouseEvent<HTMLLabelElement, MouseEvent>
    ) => {
      if (
        (event.target === this || event.target === spanRef.current) &&
        event.detail > 1
      ) {
        event.preventDefault();
      }
    };

    return (
      <Component.label
        className={twx("flex flex-col h-full w-full", className)}
        onMouseDown={composePreventableEventHandlers(
          onMouseDown,
          disableLabelHighlight
        )}
        ref={forwardedRef}
        {...props}
      >
        {labelContent}
      </Component.label>
    );
  }
);

export { Label };
export type { ILabel, ILabelProps };
