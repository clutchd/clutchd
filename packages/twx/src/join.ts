// https://github.com/dcastil/tailwind-merge/blob/main/src/lib/tw-join.ts
// @clutchd/clsx but only supports strings and numbers

function toVal(args: any) {
  if (typeof args === "string" || typeof args === "number") return args;
  return "";
}

export function join(...args: any[]) {
  let str = "",
    i = 0,
    arg;
  for (; i < args.length; ) {
    if ((arg = toVal(args[i++]))) {
      str += str ? " " + arg : arg;
    }
  }
  return str;
}
