// biome-ignore lint: meticulously optimized, all lint changes need to be thouroughly reviewed
function toVal(args: any) {
  if (typeof args === "string" || typeof args === "number") return args;
  let out = "";
  if (typeof args === "object") {
    if (Array.isArray(args)) {
      // biome-ignore lint: meticulously optimized, all lint changes need to be thouroughly reviewed
      let i = 0,
        arg,
        len = args.length;
      // biome-ignore format: meticulously optimized, all lint changes need to be thouroughly reviewed
      for (; i < len; i++) {
        // biome-ignore lint: meticulously optimized, all lint changes need to be thouroughly reviewed
        if (args[i] && (arg = toVal(args[i]))) {
          out += (out && " ") + arg;
        }
      }
    } else {
      // biome-ignore lint: meticulously optimized, all lint changes need to be thouroughly reviewed
      for (let key in args) {
        if (args[key]) out += (out && " ") + key;
      }
    }
  }

  return out;
}

// biome-ignore lint: meticulously optimized, all lint changes need to be thouroughly reviewed
export function clsx(...args: any[]) {
  // biome-ignore lint: meticulously optimized, all lint changes need to be thouroughly reviewed
  let str = "",
    i = 0,
    // biome-ignore lint: meticulously optimized, all lint changes need to be thouroughly reviewed
    arg;
  // biome-ignore lint: meticulously optimized, all lint changes need to be thouroughly reviewed
  for (; i < args.length; ) {
    // biome-ignore lint: meticulously optimized, all lint changes need to be thouroughly reviewed
    if ((arg = toVal(args[i++]))) {
      // biome-ignore lint: meticulously optimized, all lint changes need to be thouroughly reviewed
      str += str ? " " + arg : arg;
    }
  }
  return str;
}

export default clsx;
