import fs from "fs";
import { minify } from "terser";
import zlib from "zlib";

describe("isEmpty", () => {
  test("Ensures the bundle size is accurate", async () => {
    const input = fs.readFileSync("dist/index.js", "utf8");

    const result = await minify(input, {
      module: true,
      compress: true,
    });

    // @ts-ignore
    const size = zlib.gzipSync(result.code).byteLength;

    expect(size).toBeLessThanOrEqual(2070);
  });
});
