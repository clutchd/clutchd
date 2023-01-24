import { clsx } from "@clutchd/clsx";
import * as React from "react";
import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { composePreventableEventHandlers } from "@clutchd/compose-event-handlers";

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
    // label content
    const [labelContent, setLabelContent] = React.useState(content);

    // update label content based on prop and children
    React.useEffect(() => {
      if (content) {
        setLabelContent(
          <>
            {innerComponent(content)}
            {children}
          </>
        );
      } else if (children) {
        setLabelContent(innerComponent(children));
      } else {
        console.warn("No content provided for label.");
      }
    }, [children, content]);

    // create component for inner content
    const innerRef = React.createRef<HTMLSpanElement>();
    const innerComponent = (innerContent: React.ReactNode) => (
      <span
        className={clsx(
          "block mb-1 font-semibold text-gray-700 text-base focus-within:text-gray-900",
          required && "after:content-['*'] after:ml-1 after:text-red-400"
        )}
        ref={innerRef}
      >
        {innerContent}
      </span>
    );

    // disable the label's text highlight
    const disableLabelHighlight = (
      event: React.MouseEvent<HTMLLabelElement, MouseEvent>
    ) => {
      if (
        (event.target === this || event.target === innerRef.current) &&
        event.detail > 1
      )
        event.preventDefault();
    };

    return (
      <Component.label
        className={clsx("block transition-all", className)}
        ref={forwardedRef}
        {...props}
        onMouseDown={composePreventableEventHandlers(
          onMouseDown,
          disableLabelHighlight
        )}
      >
        {labelContent}
      </Component.label>
    );
  }
);

export { Label };
export type { ILabel, ILabelProps };
