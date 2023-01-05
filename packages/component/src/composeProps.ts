function composeProps(
  original: Record<string, any>,
  ...props: Record<string, any>[]
) {
  // create new props object derived from original props
  let allProps = { ...original };
  console.log("allProps:", allProps);

  // create object used to track and compose all event handlers
  let handlers: Record<string, { (event: any): void }[]> = {};
  console.log("handlers:", handlers);

  // iterate through all provided prop objects
  props.forEach((currentProps) => {
    console.log("currentProps:", currentProps);
    for (const key in currentProps) {
      console.log("evaluating:", key, " => ", currentProps[key]);

      // if current prop is a handler, store prop for composing later
      if (typeof currentProps[key] === "function") {
        isEmpty(handlers[key])
          ? (handlers[key] = [currentProps[key]])
          : handlers[key].push(currentProps[key]);
        console.log("stored handler:", handlers);
        return;
      }

      // // if current prop is a handler, store prop for composing later
      // if (/^on[A-Z]/.test(key)) {
      //   handlers[key].push(currentProps[key]);
      //   console.log("stored handler: " + JSON.stringify(handlers));
      //   return;
      // }

      // otherwise, write prop to allProps
      allProps[key] = currentProps[key];
      console.log("write:", key, " => ", allProps);
    }
  });

  for (const key in handlers) {
    console.log("key:", key, handlers[key]);
  }

  console.log("composed:", allProps);
  // return composed props
  return allProps;
}

export { composeProps };

import { isEmpty } from "@clutchd/is-empty";

/**
 * Composes multiple event handlers into a single handler
 * @param original Original event handler that we are composing from, this handler will always execute
 * @param handlers Additional event handler that will only execute when the event has not been cancelled
 * @returns A single event handlers composed from all provided handlers
 */
function composeEventHandlers<E>(
  original: (event: E) => void,
  ...handlers: { (event: E): void }[]
) {
  return function (event: E) {
    original?.(event);

    if (!(event as Event)?.defaultPrevented) {
      return handlers
        .filter((handler) => !isEmpty(handler))
        .forEach((handler) => {
          return handler?.(event);
        });
    }
  };
}

export { composeEventHandlers };

// /**
//  * Merges two sets of props, with `newProps` taking priority
//  * @param props Original props that will be merged / overwritten
//  * @param newProps New props that will be merged / overwrite props
//  * @returns A single set of merged props
//  */
// function mergeProps(props: IAnyProps, newProps: IAnyProps) {
//   // all `newProps` should override
//   const overrideProps = { ...newProps };

//   // iterate through all `newProps`
//   for (const propName in newProps) {
//     // get prop values
//     const propValue = props[propName];
//     const newPropValue = newProps[propName];

//     // checks if this prop is a handler
//     const isHandler = /^on[A-Z]/.test(propName);

//     // if it's a handler, modify the override by composing the base handler
//     if (isHandler) {
//       overrideProps[propName] = (...args: unknown[]) => {
//         newPropValue?.(...args);
//         propValue?.(...args);
//       };
//     }

//     // if it's `style`, we merge them
//     else if (propName === "style") {
//       overrideProps[propName] = { ...propValue, ...newPropValue };
//     }

//     // if it's `className`, we merge them
//     else if (propName === "className") {
//       overrideProps[propName] = [propValue, newPropValue]
//         .filter(Boolean)
//         .join(" ");
//     }
//   }

//   return { ...props, ...overrideProps };
// }
