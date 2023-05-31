// @ts-ignore
import fs from "fs";
import { getLocalSize } from ".";

test("ensures the local size compression functions", async () => {
  const input = fs.readFileSync("dist/index.js", "utf8");
  const size = await getLocalSize([input]);

  expect(size.rawCompressedSize).toBeLessThanOrEqual(size.rawUncompressedSize);
});
