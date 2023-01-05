import { composeRefs } from "@radix-ui/react-compose-refs";
import React from "react";
import { IHasChildrenProps } from ".";
import { composeProps } from "./composeProps";

/**
 * Type to define `Clone` component
 */
type IClone = typeof Child;

/**
 * Type to define `Clone` props
 */
interface ICloneProps extends IHasChildrenProps {}

/**
 * A utility component that renders the underlying child element for `AsChild`
 */
const Child = React.forwardRef<any, ICloneProps>(
  ({ children, ...props }, forwardedRef) => {
    // if children is a valid react element, clone the children
    if (React.isValidElement(children)) {
      return React.cloneElement<any>(children, {
        ...composeProps(props, children.props),
        ref: composeRefs(forwardedRef, (children as any).ref),
      });
    }

    // otherwise, do not render
    return React.Children.count(children) > 1
      ? React.Children.only(null)
      : null;
  }
);

Child.displayName = "Clone";

export { Child };
export type { IClone, ICloneProps };

// // /**
// //  * A utility component that renders the underlying child element for `Slot`
// //  */
// // const Clone = React.forwardRef<any, ICloneProps>(({ children, ...props }, ref) => {
// //   // get first child
// //   const child = React.Children.only(children);
// //   return React.isValidElement(child)
// //     ? React.cloneElement(child, {
// //       ...mergeProps(props, child.props),
// //       ref: composeRefs(ref, (child as any).ref),
// //     })
// //     : null;
// // });

// const Clone = React.forwardRef<any, ICloneProps>(
//   ({ children, ...props }, forwardedRef) => {
//     // if children is a valid react element, clone the children
//     if (React.isValidElement(children)) {
//       return React.cloneElement<any>(children, {
//         ...mergeProps(props, children.props),
//         ref: composeRefs(forwardedRef, (children as any).ref),
//       });
//     }

//     // otherwise, do not render
//     return React.Children.count(children) > 1
//       ? React.Children.only(null)
//       : null;
//   }
// );
