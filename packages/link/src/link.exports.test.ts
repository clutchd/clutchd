import { expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { getLocalSize, getRemoteSize } from "@clutchd/bundlejs";
import { Link, LinkRoot } from ".";

test("exports", () => {
  expect(typeof LinkRoot).toEqual("object");
  expect(typeof Link).toEqual("object");
});

test("ensures the bundle size is smaller than the last size", async () => {
  const og = await getRemoteSize("@clutchd/link");
  const size = await getLocalSize([readFileSync("dist/index.js", "utf8")]);
  if (og)
    expect(size.rawCompressedSize).toBeLessThanOrEqual(og.rawCompressedSize);
});
