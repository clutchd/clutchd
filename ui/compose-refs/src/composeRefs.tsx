import { Ref, MutableRefObject, useCallback } from "react";

/**
 * Sets the value of the provided ref
 * @param ref Ref to have it's value set
 * @param value Value to be used for the provided ref
 */
function setRef<T>(ref: Ref<T> | undefined, value: T) {
  if (!ref) return;
  if (typeof ref === "function") ref(value);
  else (ref as React.MutableRefObject<T>).current = value;
}

/**
 * Composes multiple ref objects into a single ref object
 * @param refs Array of ref objects that will be composed
 * @returns A single ref object composed from all provided refs
 */
function composeRefs<T>(...refs: (Ref<T> | undefined)[]) {
  return (node: T) => refs.forEach((ref) => setRef(ref, node));
}

/**
 * Custom hook that composes multiple ref objects into a single ref object
 * @param refs Array of ref objects that will be composed
 * @returns A single ref object composed from all provided refs
 */
function useComposedRefs<T>(...refs: (Ref<T> | undefined)[]) {
  return useCallback(composeRefs(...refs), refs);
}

export { composeRefs, useComposedRefs };
