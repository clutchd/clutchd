import { getLocalSize, getRemoteSize } from "@clutchd/bundlejs";
import { readFileSync } from "fs";
import { isEmpty } from ".";

test("exports", () => {
  expect(typeof isEmpty).toEqual("function");
  expect(typeof isEmpty()).toEqual("boolean");
});

test("ensures the bundle size is smaller than the last size", async () => {
  const og = await getRemoteSize("@clutchd/is-empty");
  const size = await getLocalSize([readFileSync("dist/index.js", "utf8")]);
  expect(size.rawCompressedSize).toBeLessThanOrEqual(og.rawCompressedSize);
});
