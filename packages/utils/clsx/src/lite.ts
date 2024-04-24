export function clsx(...args: any[]) {
  let str = "",
    i = 0,
    arg;
  for (; i < args.length; ) {
    if ((arg = args[i++])) {
      if (typeof arg === "string") {
        str += str ? " " + arg : arg;
      }
    }
  }
  return str;
}

export default clsx;
