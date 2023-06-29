import { mergeEventHandlers } from ".";
import { getLocalSize, getRemoteSize } from "@clutchd/bundlejs";
import { readFileSync } from "fs";

test("exports", () => {
  expect(typeof mergeEventHandlers).toEqual("function");
  expect(typeof mergeEventHandlers(null)).toEqual("undefined");
});

test("ensures the bundle size is smaller than the last size", async () => {
  const og = await getRemoteSize("@clutchd/merge-event-handlers");
  const size = await getLocalSize([readFileSync("dist/index.mjs", "utf8")]);
  expect(size.rawCompressedSize).toBeLessThanOrEqual(og.rawCompressedSize);
});
