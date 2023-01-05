import { composeProps } from "./composeProps";

describe("composeProps", () => {
  // test("Compose unique generic props", async () => {
  //   const original = { a: "1" };
  //   const props = { b: "2" };
  //   expect(composeProps(original, props)).toEqual({
  //     a: "1",
  //     b: "2",
  //   });
  // });

  test("Compose unique handler props", async () => {
    const handler = () => console.log("first");
    const original: Record<string, any> = { a: handler };
    const props: Record<string, any> = { b: handler };
    expect(composeProps(original, props)).toEqual({
      a: handler,
      b: handler,
    });
  });
});
