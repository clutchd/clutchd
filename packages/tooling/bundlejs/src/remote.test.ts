import { getRemoteSize } from ".";

test("ensures the local size compression functions", async () => {
  const size = await getRemoteSize("@clutchd/clsx");
  expect(size.rawCompressedSize).toBeLessThanOrEqual(size.rawUncompressedSize);
});

test("allow package versions to be targeted", async () => {
  const size = await getRemoteSize("@clutchd/clsx@1.0.5");
  expect(size.rawCompressedSize).toBeLessThanOrEqual(size.rawUncompressedSize);
});
