import { Slot } from ".";
import { getLocalSize, getRemoteSize } from "@clutchd/bundlejs";
import { readFileSync } from "fs";

test("exports", () => {
  expect(typeof Slot).toEqual("object");
});

test("ensures the bundle size is not bigger than the last size", async () => {
  const og = await getRemoteSize("@clutchd/slot");
  const size = await getLocalSize([readFileSync("dist/index.mjs", "utf8")]);
  expect(size.rawCompressedSize).toBeLessThanOrEqual(og.rawCompressedSize);
});

test("ensures the bundle size is not bigger than the original size", async () => {
  const og = await getRemoteSize("@radix-ui/react-slot");
  const size = await getLocalSize([readFileSync("dist/index.mjs", "utf8")]);
  expect(size.rawCompressedSize).toBeLessThanOrEqual(og.rawCompressedSize);
});
