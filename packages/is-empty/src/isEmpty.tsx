/**
 * Determines if the provided value is empty; This is not just a simple check for a truthy or falsy value
 * @param value - Value we are checking for emptiness
 * @returns True if empty, otherwise false
 */
export function isEmpty(value: any) {
  // if undefined or null, we are empty
  if (value == null) {
    return true;
  }

  // if value is a finite number, we are not empty
  // 0 is considered falsy, so we must check for numbers here
  if (Number.isFinite(value)) {
    return false;
  }

  // if value is falsy, we are empty
  if (!value) {
    return true;
  }

  // if value is a date, we are not empty if valid
  if (Object.prototype.toString.call(value) === "[object Date]") {
    return isNaN(value.getTime());
  }

  // otherwise check for key length to determine emptiness
  return Object.keys(value).length === 0;
}
