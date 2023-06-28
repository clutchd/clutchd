import { composeRefs } from ".";
import { getLocalSize, getRemoteSize } from "@clutchd/bundlejs";
import { readFileSync } from "fs";

test("exports", () => {
  expect(typeof composeRefs).toEqual("function");
  expect(typeof composeRefs((e) => {})).toEqual("function");
});

test("ensures the bundle size is not bigger than the last size", async () => {
  const og = await getRemoteSize("@clutchd/compose-refs");
  const size = await getLocalSize([readFileSync("dist/index.mjs", "utf8")]);
  expect(size.rawCompressedSize).toBeLessThanOrEqual(og.rawCompressedSize);
});
