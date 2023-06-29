import { Ref, MutableRefObject, useCallback } from "react";

/**
 * Composes multiple ref objects into a single ref object
 * @param refs Array of ref objects that will be composed
 * @returns A single ref object composed from all provided refs
 */
function composeRefs<T>(...refs: (Ref<T> | undefined)[]) {
  return (node: T) => refs.forEach((ref) => {
    if (!ref) return;
    if (typeof ref === "function") ref(node);
    else (ref as MutableRefObject<T>).current = node;
  });
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
