// @ts-ignore
import fetch from "node-fetch";

/**
 * Get the size of a package from bundlejs.com
 * @param pkg Package name we are looking for
 * @returns
 */
export async function getRemoteSize(pkg: string): Promise<{
  rawUncompressedSize: number;
  rawCompressedSize: number;
}> {
  const data = await fetch(`https://edge.bundlejs.com/?q=${pkg}`);
  const { size } = await data.json();
  return {
    rawUncompressedSize: size?.rawUncompressedSize,
    rawCompressedSize: size?.rawCompressedSize,
  };
}
