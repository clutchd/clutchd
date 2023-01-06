import * as React from "react";

/**
 * Type to define possible ref values
 */
type PossibleRef<T> = React.Ref<T> | undefined;

/**
 * Sets the value of the provided ref
 * @param ref Ref to have it's value set
 * @param value Value to be used for the provided ref
 */
function setRef<T>(ref: PossibleRef<T>, value: T) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref != null) {
    (ref as React.MutableRefObject<T>).current = value;
  }
}

/**
 * Composes multiple ref objects into a single ref object
 * @param refs Array of ref objects that will be composed
 * @returns A single ref object composed from all provided refs
 */
function composeRefs<T>(...refs: PossibleRef<T>[]) {
  return (node: T) => refs.forEach((ref) => setRef(ref, node));
}

export { composeRefs };
