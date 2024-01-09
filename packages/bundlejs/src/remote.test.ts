import { getRemoteSize } from ".";

test("ensures the remote size compression functions with bundlephobia", async () => {
  const size = await getRemoteSize("@clutchd/clsx");
  expect(size.rawCompressedSize).toBeLessThanOrEqual(size.rawUncompressedSize);
});

test("ensures the remote size compression functions with bundlejs", async () => {
  const size = await getRemoteSize("@clutchd/clsx", "bundlejs");
  expect(size.rawCompressedSize).toBeLessThanOrEqual(size.rawUncompressedSize);
});
