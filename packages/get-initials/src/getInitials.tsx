import { IsEmpty } from "@clutchd/is-empty";

function getInitials(...args: string[]) {
  let names: string[] = args
    .filter((x) => !IsEmpty(x))
    .join(" ")
    .split(" ");

  if (names.length === 1 && IsEmpty(names[0])) {
    return "U";
  }

  let initials = names[0].substring(0, 1).toUpperCase();

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
}

export { getInitials };
