function toVal(args: any) {
  if (typeof args === "string" || typeof args === "number") return args;

  let out = "";
  if (typeof args === "object") {
    if (Array.isArray(args)) {
      let i = 0,
        arg,
        len = args.length;
      for (; i < len; i++) {
        if (args[i] && (arg = toVal(args[i]))) {
          out += (out && " ") + arg;
        }
      }
    } else {
      for (let key in args) {
        if (args[key]) out += (out && " ") + key;
      }
    }
  }

  return out;
}

function clsx(...args: any[]) {
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

export { clsx };
