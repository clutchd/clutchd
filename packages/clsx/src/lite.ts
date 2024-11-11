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
    if ((arg = args[i++])) {
      if (typeof arg === "string") {
        // biome-ignore lint: meticulously optimized, all lint changes need to be thouroughly reviewed
        str += str ? " " + arg : arg;
      }
    }
  }
  return str;
}

export default clsx;
