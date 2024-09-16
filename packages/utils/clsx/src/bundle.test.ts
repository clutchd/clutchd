import { readFileSync } from "node:fs";
import { getLocalSize, getRemoteSize } from "@clutchd/bundlejs";
import pkg from "../package.json";

test("ensures the bundle size is accurate", async () => {
  function getClaimedSize(text: string) {
    const match = text.match(/\((\d+)B\)/);
    if (match == null) return "";
    return Number.parseInt(match[1] ?? "");
  }
  const pkgSize = getClaimedSize(pkg.description);
  const size = await getLocalSize([readFileSync("dist/index.js", "utf8")]);
  expect(size.rawCompressedSize).toEqual(pkgSize);
});

test("ensures the bundle size is smaller than the last size", async () => {
  const og = await getRemoteSize("@clutchd/clsx");
  const size = await getLocalSize([readFileSync("dist/index.js", "utf8")]);
  if (og) {
    expect(size.rawCompressedSize).toBeLessThanOrEqual(og.rawCompressedSize);
  }
});

test("ensures the package is smaller than the original size", async () => {
  const og = await getRemoteSize("clsx");
  const size = await getRemoteSize("@clutchd/clsx");
  if (og && size) {
    expect(size.rawCompressedSize).toBeLessThanOrEqual(og.rawCompressedSize);
  }
});
