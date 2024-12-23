// @ts-ignore
import { Foras, gzip } from "@hazae41/foras";

export async function getLocalSize(inputs: Uint8Array[] | string[]): Promise<{
  rawUncompressedSize: number;
  rawCompressedSize: number;
}> {
  // Convert inputs to binary in Uint8Array form
  const contents = inputs.map((input: Uint8Array | string) => {
    return input instanceof Uint8Array
      ? input
      : new TextEncoder().encode(input);
  });

  // Total uncompressed size
  const rawUncompressedSize = contents.reduce(
    (acc, content) => acc + content.byteLength,
    0,
  );

  // Choose a different compression function based on the compression type
  const compressionMap = await (async () => {
    await Foras.initBundledOnce();
    return async (code: Uint8Array) => {
      const memory = new Foras.Memory(code);
      return gzip(memory, 9);
    };
  })();

  // Compress all binary contents according to the compression map
  const compressedContent = await Promise.all(
    contents.map((content) => compressionMap(content)),
  );

  // Convert sizes to human readable formats, e.g. 10000 bytes to 10MB
  const rawCompressedSize = compressedContent.reduce(
    (acc, memory) => acc + memory.bytes.length,
    0,
  );

  return {
    rawUncompressedSize: rawUncompressedSize,
    rawCompressedSize: rawCompressedSize,
  };
}
