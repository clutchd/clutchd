/**
 * Determines if the provided value is empty; This is not just a simple check for a truthy or falsy value
 * @param value - Value we are checking for emptiness
 * @returns True if empty, otherwise false
 */
export function isEmpty(value: any) {
  // if value is a finite number, we are not empty
  if (Number.isFinite(value)) {
    return false;
  }

  // otherwise check for null
  return value == null || Object.keys(value).length === 0 || !value;
}
