import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { composePreventableEventHandlers } from "@clutchd/compose-event-handlers";
import * as React from "react";

/**
 * Type to define `Label` component.
 */
type ILabel = React.ElementRef<typeof Component.label>;

/**
 * Type to define `Label` props.
 */
interface ILabelProps {}

/**
 * Type to define `Label` props with html attributes.
 */
interface ILabelHtmlProps
  extends ILabelProps,
    IComponentPropsWithoutRef<typeof Component.label> {}

/**
 * `Label` - A label component used to render accessible labels.
 * @param props `ILabelHtmlProps` used to render this `Label`.
 * @returns `Label` component.
 */
const Label = React.forwardRef<ILabel, ILabelHtmlProps>(
  ({ onMouseDown, ...props }, forwardedRef) => {
    // disable the label's text highlight
    const disableLabelHighlight = (
      event: React.MouseEvent<HTMLLabelElement, MouseEvent>,
    ) => {
      if (event.detail > 1) {
        event.preventDefault();
      }
    };

    return (
      <Component.label
        onMouseDown={composePreventableEventHandlers(
          onMouseDown,
          disableLabelHighlight,
        )}
        ref={forwardedRef}
        {...props}
      />
    );
  },
);

Label.displayName = "Label";

export { Label };
export type { ILabel, ILabelProps, ILabelHtmlProps };
