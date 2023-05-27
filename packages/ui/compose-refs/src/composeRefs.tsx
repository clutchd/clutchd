import { MutableRefObject, Ref, useCallback } from "react";

/**
 * Type to define possible ref values
 */
type PossibleRef<T> = Ref<T> | undefined;

/**
 * Sets the value of the provided ref
 * @param ref Ref to have it's value set
 * @param value Value to be used for the provided ref
 */
function setRef<T>(ref: PossibleRef<T>, value: T) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref != null) {
    (ref as MutableRefObject<T>).current = value;
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


/**
 * Custom hook that composes multiple ref objects into a single ref object
 * @param refs Array of ref objects that will be composed
 * @returns A single ref object composed from all provided refs
 */
function useComposedRefs<T>(...refs: PossibleRef<T>[]) {
  return useCallback(composeRefs(...refs), refs);
}

export { composeRefs, useComposedRefs };
