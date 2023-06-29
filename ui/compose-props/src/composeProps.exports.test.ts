import { composeProps } from ".";
import { getLocalSize, getRemoteSize } from "@clutchd/bundlejs";
import { readFileSync } from "fs";

test("exports", () => {
  expect(typeof composeProps).toEqual("function");
  expect(typeof composeProps((e) => {})).toEqual("object");
});

test("ensures the bundle size is smaller than the last size", async () => {
  const og = await getRemoteSize("@clutchd/compose-props");
  const size = await getLocalSize([readFileSync("dist/index.mjs", "utf8")]);
  expect(size.rawCompressedSize).toBeLessThanOrEqual(og.rawCompressedSize);
});
