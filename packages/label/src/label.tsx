import { clsx } from "@clutchd/clsx";
import * as React from "react";
import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { composeEventHandlers, composePreventableEventHandlers } from "@clutchd/compose-event-handlers";

/**
 * Type to define `Label` component
 */
type ILabel = React.ElementRef<typeof Component.label>;

/**
 * Type to define `Label` props
 */
interface ILabelProps
  extends IComponentPropsWithoutRef<typeof Component.label> {
  content?: React.ReactNode;
  required?: boolean;
}

/**
 * `Label` - A label component used to render accessible form labels
 * @param props `ILabelProps` used to render this `Label`
 * @returns `Label` component
 */
const Label = React.forwardRef<ILabel, ILabelProps>(
  (
    { className, children, content, onMouseDown, required = false, ...props },
    forwardedRef
  ) => {
    // content states
    const [spanContent, setSpanContent] = React.useState(content);
    const [childrenContent, setChildrenContent] = React.useState(children);

    // update content states based on props
    React.useEffect(() => {
      if (content) {
        setSpanContent(content);
        setChildrenContent(children);
      } else if (children) {
        setSpanContent(children);
        setChildrenContent(null);
      } else {
        setSpanContent(null);
        setChildrenContent(null);
        console.warn("No content provided for label.");
      }
    }, [children, content]);

    // create ref for label span
    const spanRef = React.createRef<HTMLSpanElement>();

    // create component for label content
    let labelContent = (
      <>
        <span
          className={clsx(
            "block mb-1 font-medium text-gray-700 text-base focus-within:text-gray-900",
            required && "after:content-['*'] after:ml-1 after:text-red-400"
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
      if ((event.target === this || event.target === spanRef.current) && event.detail > 1) {
        event.preventDefault();
      }
    };

    return (
      <Component.label
        className={clsx("block", className)}
        onMouseDown={composePreventableEventHandlers(onMouseDown, disableLabelHighlight)}
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
