/**
 * Returns a set of initials derived from the provided names.
 * @param names Names which we need to derive initials from.
 * @returns A single set of initials.
 */
export function getInitials(...names: string[]) {
  // declare vars to hold initials
  let f = "U";

  // filter out all invalid inputs
  const result = names
    .filter((x) => typeof x === "string")
    .join(" ")
    .split(" ")
    .filter((x) => x.trim() !== "");

  // if no valid inputs provided, return default
  if (result.length === 0) {
    return f;
  }

  // otherwise, get current length of array
  const len = result.length;

  // collect first initial
  if (result[0]) {
    f = result[0].charAt(0);
  }

  // if only one valid input, return first initial
  if (len === 1) {
    return f.toUpperCase().toString();
  }

  // otherwise, return first and last initial
  return (f + result[len - 1]?.charAt(0)).toUpperCase();
}
