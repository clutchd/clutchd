import { expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { getLocalSize, getRemoteSize } from "@clutchd/bundlejs";

test("ensures the bundle size is smaller than the last size", async () => {
  const og = await getRemoteSize("@clutchd/twx");
  const size = await getLocalSize([readFileSync("dist/index.js", "utf8")]);
  if (og) {
    expect(size.rawCompressedSize).toBeLessThanOrEqual(og.rawCompressedSize);
  }
});
