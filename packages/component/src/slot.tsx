import { composeProps } from "@clutchd/compose-props";
import { composeRefs } from "@clutchd/compose-refs";
import * as React from "react";

/**
 * Type to define `Slot` element
 */
type ISlot = HTMLElement;

/**
 * Type to define `Slot` props
 */
interface ISlotProps extends React.HTMLAttributes<ISlot> {
  children?: React.ReactNode;
}

/**
 * A higher-order component that allows rendering as any `React.Element`
 */
const Slot = React.forwardRef<ISlot, ISlotProps>(
  ({ children, ...props }, forwardedRef) => {
    // if valid children were provided, clone the children
    if (React.isValidElement(children)) {
      return React.cloneElement<any>(children, {
        ...composeProps(props, children.props),
        ref: composeRefs(forwardedRef, (children as any).ref),
      });
    }

    // if invalid children and props were provided, wrap in a div and warn
    if (Object.keys(props).length > 0) {
      console.warn("Slot forcefully rendered invalid children as div.");
      return (
        <Slot>
          <div {...props} ref={forwardedRef as any}>
            {children}
          </div>
        </Slot>
      );
    }

    console.log("Slot", "invalid children", children);
    return (
      <Slot>
        <>{children}</>
      </Slot>
    );
  }
);

Slot.displayName = "Slot";

export { Slot };
export type { ISlotProps, ISlot };
