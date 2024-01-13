import { clsx } from ".";
import { getLocalSize, getRemoteSize } from "@clutchd/bundlejs";
import pkg from "../package.json";
import { readFileSync } from "fs";
import { expect, test } from "bun:test";

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
  const pkgSize = getClaimedSize(pkg.description) || -1;
  const size = await getLocalSize([readFileSync("dist/index.mjs", "utf8")]);
  expect(size.rawCompressedSize).toEqual(pkgSize);
});

test("ensures the bundle size is smaller than the last size", async () => {
  const og = await getRemoteSize("@clutchd/clsx");
  const size = await getLocalSize([readFileSync("dist/index.mjs", "utf8")]);
  expect(size.rawCompressedSize).toBeLessThanOrEqual(og.rawCompressedSize);
});

test("ensures the package is smaller than the original size", async () => {
  const og = await getRemoteSize("clsx");
  const size = await getRemoteSize("@clutchd/clsx");
  expect(size.rawCompressedSize).toBeLessThanOrEqual(og.rawCompressedSize);
});
