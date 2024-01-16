import fetch from "node-fetch";

/**
 * Get the size of a package from bundlejs.com
 * @param pkg Package name we are looking for
 * @returns
 */
export async function getRemoteSize(
  pkg: string,
  provider: "bundlephobia" | "bundlejs" = "bundlephobia",
): Promise<{
  rawUncompressedSize: number;
  rawCompressedSize: number;
}> {
  if (provider === "bundlejs") {
    const data = await fetch(`https://edge.bundlejs.com/?q=${pkg}`);
    const { size } = await data.json();
    return {
      rawUncompressedSize: size?.rawUncompressedSize,
      rawCompressedSize: size?.rawCompressedSize,
    };
  } else {
    const data = await fetch(
      `https://bundlephobia.com/api/size?package=${pkg}`,
    );
    const { size, gzip } = await data.json();
    return {
      rawUncompressedSize: size,
      rawCompressedSize: gzip,
    };
  }
}
