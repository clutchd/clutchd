import { IsEmpty } from "@clutchd/is-empty";

function GetInitials(name: string) {
  if (IsEmpty(name)) {
    return "U";
  }

  const names = name.split(" ");
  let initials = names[0].substring(0, 1).toUpperCase();

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
}

export { GetInitials };
