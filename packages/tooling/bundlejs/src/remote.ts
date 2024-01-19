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
  // if "@" is NOT in pkg (after first char), we are NOT targeting a version
  // in this case, we should force the latest available version
  let forceLatest = !pkg.substring(1, pkg.length - 1).includes("@");
  if (provider === "bundlejs") {
    const data = await fetch(
      `https://edge.bundlejs.com/?q=${pkg}${forceLatest ? "@latest" : ""}`,
    );
    const { size } = await data.json();
    return {
      rawUncompressedSize: size?.rawUncompressedSize,
      rawCompressedSize: size?.rawCompressedSize,
    };
  } else {
    const data = await fetch(
      `https://bundlephobia.com/api/size?package=${pkg}${forceLatest ? "@latest" : ""}`,
    );
    const { size, gzip } = await data.json();
    return {
      rawUncompressedSize: size,
      rawCompressedSize: gzip,
    };
  }
}
