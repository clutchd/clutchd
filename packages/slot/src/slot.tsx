import { composeProps } from "@clutchd/compose-props";
import { composeRefs } from "@clutchd/compose-refs";
import * as React from "react";

/**
 * Type to define `Slot` element.
 */
type ISlot = HTMLElement;

/**
 * Type to define `Slot` props.
 */
interface ISlotProps extends React.HTMLAttributes<ISlot> {
  children?: React.ReactNode;
}

/**
 * A higher-order component that allows rendering as any `React.Element`.
 */
const Slot = React.forwardRef<ISlot, ISlotProps>(
  ({ children, ...props }, forwardedRef) => {
    // if valid children were provided, clone the children
    if (React.isValidElement(children)) {
      const childrenRef = getElementRef(children);
      return React.cloneElement(children, {
        ...composeProps(props, { ...children.props }),
        ref: forwardedRef
          ? composeRefs(forwardedRef, childrenRef)
          : childrenRef,
      } as React.Attributes & { ref?: React.Ref<unknown> });
    }

    // if invalid children and props were provided, wrap in a div and warn
    if (Object.keys(props).length > 0) {
      return (
        <Slot>
          <div {...props} ref={forwardedRef as React.Ref<HTMLDivElement>}>
            {children}
          </div>
        </Slot>
      );
    }

    // otherwise, attempt to render the invalid children

    return (
      <Slot>
        {/** biome-ignore lint: Children is not neccesarily a valid react element  */}
        <>{children}</>
      </Slot>
    );
  },
);

// Before React 19 accessing `element.props.ref` will throw a warning and suggest using `element.ref`
// After React 19 accessing `element.ref` does the opposite.
// https://github.com/facebook/react/pull/28348
//
// Access the ref using the method that doesn't yield a warning.
function getElementRef(element: React.ReactElement) {
  const v = Number.parseInt(React.version.slice(0, 2), 10);
  // if react version 19 or greater
  if (v >= 19) {
    return (element as unknown as { ref: React.Ref<unknown> }).ref;
  }
  // otherwise access the old way
  return element.props.ref;
}

Slot.displayName = "Slot";

export { Slot };
export type { ISlot, ISlotProps };
