/**
 * Determines if the provided value is empty; This is not just a simple check for a truthy or falsy value
 * @param value - Value we are checking for emptiness
 * @returns True if empty, otherwise false
 */
export function isEmpty(value?: any) {
  let type = typeof value;
  // if number, function, or valid date, we are not empty
  if (type === "function" || type === "number" || (value instanceof Date && !isNaN(value.valueOf()))) {
    return false;
  }

  // if undefined or null, we are empty
  if (value == null || !value) {
    return true;
  }

  // otherwise check for key length to determine emptiness
  return Object.keys(value).length === 0;
}
