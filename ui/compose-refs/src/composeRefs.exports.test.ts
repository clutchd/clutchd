import { getLocalSize, getRemoteSize } from "@clutchd/bundlejs";
import { expect, test } from "bun:test";
import { readFileSync } from "fs";
import { composeRefs } from ".";

test("exports", () => {
  expect(typeof composeRefs).toEqual("function");
  expect(typeof composeRefs((e) => {})).toEqual("function");
});

test("ensures the bundle size is smaller than the last size", async () => {
  const og = await getRemoteSize("@clutchd/compose-refs");
  const size = await getLocalSize([readFileSync("dist/index.mjs", "utf8")]);
  expect(size.rawCompressedSize).toBeLessThanOrEqual(og.rawCompressedSize);
});

test("ensures the package is smaller than the original size", async () => {
  const og = await getRemoteSize("@radix-ui/react-compose-refs");
  const size = await getRemoteSize("@clutchd/compose-refs@1.1.5");
  console.log(size);
  expect(size.rawCompressedSize).toBeLessThanOrEqual(og.rawCompressedSize);
});
