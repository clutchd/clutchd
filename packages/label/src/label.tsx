import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { composePreventableEventHandlers } from "@clutchd/compose-preventable-event-handlers";
import * as React from "react";

/**
 * Type to define `Label` component
 */
type ILabel = React.ElementRef<typeof Component.label>;

/**
 * Type to define `Label` props
 */
interface ILabelProps {
  text?: React.ReactNode;
  required?: boolean;
}

/**
 * `Label` - A label component used to render accessible labels
 * @param props `ILabelProps` used to render this `Label`
 * @returns `Label` component
 */
const Label = React.forwardRef<
  ILabel,
  ILabelProps & IComponentPropsWithoutRef<typeof Component.label>
>(
  (
    { className, children, text, onMouseDown, required = false, ...props },
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
    // TODO: Bring back theming
    let labelContent = (
      <>
        <span
          className={[
            "flex h-full w-full font-baseline font-medium text-sm sm:text-base lg:text-lg rounded-md",
            required && "after:content-['*'] after:ml-1 after:text-red-400",
            "text-gray-700 dark:text-gray-300",
          ].join(" ")}
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
        className={["flex flex-col h-full w-full", className].join(" ")}
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
