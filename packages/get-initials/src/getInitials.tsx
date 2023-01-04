import { isEmpty } from "@clutchd/is-empty";

/**
 * Returns a set of initials dervied from the provided names
 * @param names Names which we need to derive initials from
 * @returns A single set of initials
 */
function getInitials(...names: string[]) {
  let formatted: string[] = names
    .filter((x) => !isEmpty(x))
    .join(" ")
    .split(" ");

  if (formatted.length === 1 && isEmpty(formatted[0])) {
    return "U";
  }

  let initials = formatted[0].substring(0, 1).toUpperCase();

  if (formatted.length > 1) {
    initials += formatted[formatted.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
}

export { getInitials };
