import { CoreLink, Link } from ".";
import { getLocalSize, getRemoteSize } from "@clutchd/bundlejs";
import { readFileSync } from "fs";

test("exports", () => {
  expect(typeof CoreLink).toEqual("object");
  expect(typeof Link).toEqual("object");
});

test("ensures the bundle size is smaller than the last size", async () => {
  const og = await getRemoteSize("@clutchd/link");
  const size = await getLocalSize([readFileSync("dist/index.js", "utf8")]);
  if (og)
    expect(size.rawCompressedSize).toBeLessThanOrEqual(og.rawCompressedSize);
});
