/**
 * Returns a set of initials derived from the provided names
 * @param names Names which we need to derive initials from
 * @returns A single set of initials
 */
function getInitials(...names: string[]) {
  // declare vars to hold initials
  let l,
    f = "U";

  // filter out all invalid inputs
  names = names
    .filter((x) => typeof x === "string")
    .join(" ")
    .split(" ")
    .filter((x) => x.trim() != "");

  // if no valid inputs provided, return default
  if (names.length === 0) {
    return f;
  }

  // otherwise, get current length of array
  let len = names.length;

  // collect first initial
  if (names[0]) {
    f = names[0].charAt(0);
    console.log("f: '" + f + "'");
  }

  // if only one valid input, return first initial
  if (len === 1) {
    return f.toUpperCase().toString();
  }

  // otherwise, return first and last initial
  return (f + names[len - 1]?.charAt(0)).toUpperCase();
}

export { getInitials };
