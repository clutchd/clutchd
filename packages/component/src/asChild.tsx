import { composeRefs } from "@radix-ui/react-compose-refs";
import React from "react";

/**
 * Generic type to define a component any props
 */
type AnyProps = Record<string, any>;

/**
 * Type to define `AsChild` props
 */
interface AsChildProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

/**
 * A higher-order component that allows rendering as any `React.Element`
 */
const AsChild = React.forwardRef<HTMLElement, AsChildProps>(
  ({ children, ...asChildProps }, forwardedRef) => {
    // convert children to an array
    const childrenArray = React.Children.toArray(children);

    // determines if the children array is a valid `asChild` component
    const validAsChild = childrenArray.find(isValidAsChild);

    // if the provided children are validAsChild, build new component
    if (validAsChild) {
      // the new element to render, the current children of `Component`
      const newElement = validAsChild.props.children as React.ReactNode;

      // the new children to render, the children of the `newElement` or grandchildren of `Component`
      const newChildren = childrenArray.map((child) => {
        // if child is validAsChild, only grab it's children
        if (child === validAsChild) {
          // because the new element will be the one rendered, we are only interested in its children
          if (React.Children.count(newElement) > 1)
            return React.Children.only(null);
          return React.isValidElement(newElement)
            ? (newElement.props.children as React.ReactNode)
            : null;
        }

        // otherwise return child
        else {
          return child;
        }
      });

      // render new `asChild` component
      return (
        <Child {...asChildProps} ref={forwardedRef}>
          {React.isValidElement(newElement)
            ? React.cloneElement(newElement, undefined, newChildren)
            : null}
        </Child>
      );
    }

    // otherwise, render component "as-is"
    return (
      <Child {...asChildProps} ref={forwardedRef}>
        {children}
      </Child>
    );
  }
);

AsChild.displayName = "AsChild";

/**
 * Type to define `Child` props
 */
interface ChildProps {
  children: React.ReactNode;
}

/**
 * A utility component that renders the underlying child element for `AsChild`
 */
const Child = React.forwardRef<any, ChildProps>(
  ({ children, ...props }, forwardedRef) => {
    // if children is a valid react element, clone the children
    if (React.isValidElement(children)) {
      return React.cloneElement(children, {
        ...mergeProps(props, children.props),
        ref: composeRefs(forwardedRef, (children as any).ref),
      });
    }

    // otherwise, do not render
    return React.Children.count(children) > 1
      ? React.Children.only(null)
      : null;
  }
);

Child.displayName = "Child";

/**
 * A component used to validate the underlying child element for `AsChild`
 * @param props `React.ReactNode` children being validated
 * @returns Validated children wrapped in a `React.Fragment`
 */
const ValidAsChild = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

/**
 * Determines if the provided child is `ValidAsChild`
 * @param child `ReactNode` that is being validated
 * @returns `true` if child is `ValidAsChild`, otherwise `false`
 */
function isValidAsChild(child: React.ReactNode): child is React.ReactElement {
  return React.isValidElement(child) && child.type === ValidAsChild;
}

/**
 * Merges two sets of props, with `newProps` taking priority
 * @param props Original props that will be merged / overwritten
 * @param newProps New props that will be merged / overwrite props
 * @returns A single set of merged props
 */
function mergeProps(props: AnyProps, newProps: AnyProps) {
  // all `newProps` should override
  const overrideProps = { ...newProps };

  // iterate through all `newProps`
  for (const propName in newProps) {
    // get prop values
    const propValue = props[propName];
    const newPropValue = newProps[propName];

    // checks if this prop is a handler
    const isHandler = /^on[A-Z]/.test(propName);

    // if it's a handler, modify the override by composing the base handler
    if (isHandler) {
      overrideProps[propName] = (...args: unknown[]) => {
        newPropValue?.(...args);
        propValue?.(...args);
      };
    }

    // if it's `style`, we merge them
    else if (propName === "style") {
      overrideProps[propName] = { ...propValue, ...newPropValue };
    }

    // if it's `className`, we merge them
    else if (propName === "className") {
      overrideProps[propName] = [propValue, newPropValue]
        .filter(Boolean)
        .join(" ");
    }
  }

  return { ...props, ...overrideProps };
}

export { AsChild, Child };
export type { AsChildProps };

