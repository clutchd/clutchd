import { getRemoteSize } from ".";

test("ensures the local size compression functions", async () => {
  const size = await getRemoteSize("@clutchd/clsx");
  expect(size.rawCompressedSize).toBeLessThanOrEqual(size.rawUncompressedSize);
});
