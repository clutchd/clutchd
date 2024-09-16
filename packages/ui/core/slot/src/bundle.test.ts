import { readFileSync } from "node:fs";
import { getLocalSize, getRemoteSize } from "@clutchd/bundlejs";

test("ensures the bundle size is smaller than the last size", async () => {
  const og = await getRemoteSize("@clutchd/slot");
  const size = await getLocalSize([readFileSync("dist/index.js", "utf8")]);
  if (og) {
    expect(size.rawCompressedSize).toBeLessThanOrEqual(og.rawCompressedSize);
  }
});

test("ensures the package is smaller than the original size", async () => {
  const og = await getRemoteSize("@radix-ui/react-slot");
  const size = await getRemoteSize("@clutchd/slot");
  if (og && size) {
    expect(size.rawCompressedSize).toBeLessThanOrEqual(og.rawCompressedSize);
  }
});
