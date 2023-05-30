import fs from "fs";
import fetch from "node-fetch";
import { minify } from "terser";
import zlib from "zlib";

export async function getLocalSize(path: string) {
  const input = fs.readFileSync(path, "utf8");
  const result = await minify(input, {
    module: true,
    compress: true,
  });

  // @ts-ignore
  return zlib.gzipSync(result.code).byteLength;
}

/**
 * Get the size of a package from bundlejs.com
 * @param pkg Package name we are looking for
 * @returns
 */
export async function getRemoteSize(pkg: string) {
  // @ts-ignore
  const data = await fetch(`https://edge.bundlejs.com/?q=${pkg}`);
  const { size } = await data.json();
  return size?.rawCompressedSize;
}
