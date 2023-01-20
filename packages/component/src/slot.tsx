import { composeProps } from "@clutchd/compose-props";
import { composeRefs } from "@clutchd/compose-refs";
import {
  cloneElement,
  forwardRef,
  HTMLAttributes,
  isValidElement,
  ReactNode,
} from "react";

/**
 * Type to define `Slot` component
 */
type ISlot = typeof Slot;

/**
 * Type to define `Slot` props
 */
interface ISlotProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

/**
 * A higher-order component that allows rendering as any `React.Element`
 */
const Slot = forwardRef<HTMLElement, ISlotProps>(
  ({ children, ...props }, forwardedRef) => {
    // if children were not provided, warn
    if (children == null) {
      console.warn("Slot was unable to render children, no children provided.");
      return null;
    }

    // if valid children were provided, clone the children
    if (isValidElement(children)) {
      return cloneElement<any>(children, {
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
