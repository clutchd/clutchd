import { readFileSync } from "fs";
import { getLocalSize } from ".";

test("ensures the local size compression functions", async () => {
  const input = readFileSync("dist/index.js", "utf8");
  const size = await getLocalSize([input]);
  expect(size.rawCompressedSize).toBeLessThanOrEqual(size.rawUncompressedSize);
});
