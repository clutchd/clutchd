import { getRemoteSize } from ".";

describe("bundlephobia", function () {
  test("ensures the remote size compression functions", async () => {
    const size = await getRemoteSize("@clutchd/clsx");
    if (size) {
      expect(size.rawCompressedSize).toBeLessThanOrEqual(
        size.rawUncompressedSize,
      );
    }
  });

  test("allow package versions to be targeted", async () => {
    const size = await getRemoteSize("@clutchd/clsx@1.0.5");
    if (size) {
      expect(size?.rawCompressedSize).toBeLessThanOrEqual(
        size?.rawUncompressedSize,
      );
    }
  });
});

describe("bundlejs", function () {
  test("ensures the remote size compression functions", async () => {
    const size = await getRemoteSize("@clutchd/clsx", "bundlejs");
    if (size) {
      expect(size.rawCompressedSize).toBeLessThanOrEqual(
        size.rawUncompressedSize,
      );
    }
  });

  test("allow package versions to be targeted", async () => {
    const size = await getRemoteSize("@clutchd/clsx@1.0.5", "bundlejs");
    if (size) {
      expect(size?.rawCompressedSize).toBeLessThanOrEqual(
        size?.rawUncompressedSize,
      );
    }
  });
});
