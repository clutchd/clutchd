import { composeEventHandlers } from ".";
import { getLocalSize, getRemoteSize } from "@clutchd/bundlejs";
import { readFileSync } from "fs";

test("exports", () => {
  expect(typeof composeEventHandlers).toEqual("function");
  expect(typeof composeEventHandlers((e) => {})).toEqual("function");
});

test("ensures the bundle size is not bigger than the last size", async () => {
  const og = await getRemoteSize("@clutchd/compose-preventable-event-handlers");
  const size = await getLocalSize([readFileSync("dist/index.mjs", "utf8")]);
  expect(size.rawCompressedSize).toBeLessThanOrEqual(og.rawCompressedSize);
});

test("ensures the bundle size is not bigger than the original size", async () => {
  const og = await getRemoteSize("@radix-ui/primitive");
  const size = await getLocalSize([readFileSync("dist/index.mjs", "utf8")]);
  expect(size.rawCompressedSize).toBeLessThanOrEqual(og.rawCompressedSize);
});
