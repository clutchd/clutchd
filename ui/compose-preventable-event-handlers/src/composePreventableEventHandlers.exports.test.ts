import { composePreventableEventHandlers } from ".";
import { getLocalSize, getRemoteSize } from "@clutchd/bundlejs";
import { readFileSync } from "fs";

test("exports", () => {
  expect(typeof composePreventableEventHandlers).toEqual("function");
  expect(typeof composePreventableEventHandlers((e) => {})).toEqual("function");
});

test("ensures the bundle size is smaller than the last size", async () => {
  const og = await getRemoteSize("@clutchd/compose-preventable-event-handlers");
  const size = await getLocalSize([readFileSync("dist/index.mjs", "utf8")]);
  expect(size.rawCompressedSize).toBeLessThanOrEqual(og.rawCompressedSize);
});
