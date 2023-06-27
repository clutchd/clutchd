import { clsx } from ".";
import { getLocalSize, getRemoteSize } from "@clutchd/bundlejs";
import pkg from "../package.json";
import { readFileSync } from "fs";

test("exports", () => {
  expect(typeof clsx).toEqual("function");
  expect(typeof clsx()).toEqual("string");
});

test("ensures the bundle size is accurate", async () => {
  function getClaimedSize(text) {
    const match = text.match(/\((\d+)B\)/);
    if (match == null) return "";
    return parseInt(match[1]);
  }
  const pkgSize = getClaimedSize(pkg.description);
  const size = await getLocalSize([readFileSync("dist/index.mjs", "utf8")]);
  expect(size.rawCompressedSize).toEqual(pkgSize);
});

test("ensures the bundle size is not bigger than the original size", async () => {
  const og = await getRemoteSize("clsx");
  const size = await getLocalSize([readFileSync("dist/index.mjs", "utf8")]);
  expect(size.rawCompressedSize).toBeLessThanOrEqual(og.rawCompressedSize);
});
