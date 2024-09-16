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
} | null> {
  // if "@" is NOT in pkg (after first char), we are NOT targeting a version
  // in this case, we should force the latest available version
  const forceLatest = !pkg.substring(1, pkg.length - 1).includes("@");
  if (provider === "bundlejs") {
    const data = await fetch(
      `https://edge.bundlejs.com/?q=${pkg}${forceLatest ? "@latest" : ""}`,
    );
    try {
      const { size } = await data.json();
      return {
        rawUncompressedSize: size?.rawUncompressedSize,
        rawCompressedSize: size?.rawCompressedSize,
      };
    } catch (e) {
      console.error(`Unable to fetch from bundlejs: ${e}`);
      return null;
    }
  } else {
    try {
      const data = await fetch(
        `https://bundlephobia.com/api/size?package=${pkg}${forceLatest ? "@latest" : ""}`,
      );
      const { size, gzip } = await data.json();
      return {
        rawUncompressedSize: size,
        rawCompressedSize: gzip,
      };
    } catch (e) {
      console.error(`Unable to fetch from bundlephobia: ${e}`);
      return null;
    }
  }
}
