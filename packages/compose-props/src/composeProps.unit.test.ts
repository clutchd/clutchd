import { composeProps } from ".";

describe("composeProps", () => {
  test("Compose unique generic props", async () => {
    const original = { a: "1" };
    const props = { b: "2" };
    const composed = composeProps(original, props);
    expect(composed).toEqual({
      a: "1",
      b: "2",
    });
  });

  test("Compose unique handler props", async () => {
    const handler = () => console.log("first");
    const original: Record<string, any> = { a: handler };
    const props: Record<string, any> = { b: handler };
    const composed = composeProps(original, props);
    expect(composed).toEqual({
      a: handler,
      b: handler,
    });
  });

  test("Compose incompatible handler props", async () => {
    const logSpy = jest.spyOn(console, "log");
    const handler = () => console.log("first");
    const original: Record<string, any> = { a: "hello" };
    const props: Record<string, any> = { a: handler };
    const composed = composeProps(original, props);
    composed.a();
    expect(composed).toEqual({
      a: expect.any(Function),
    });
    expect(logSpy).toHaveBeenCalledWith("first");
    expect(logSpy).toHaveBeenCalledTimes(1);
  });

  test("Compose multiple incompatible handler props", async () => {
    const logSpy = jest.spyOn(console, "log");
    const handler1 = () => console.log("first");
    const handler2 = () => console.log("second");
    const original: Record<string, any> = { a: handler1 };
    const props1: Record<string, any> = { a: "hello" };
    const props2: Record<string, any> = { a: handler2 };
    const composed = composeProps(original, props1, props2);
    composed.a();
    expect(composed).toEqual({
      a: expect.any(Function),
    });
    expect(logSpy).toHaveBeenCalledWith("second");
    expect(logSpy).toHaveBeenCalledTimes(1);
  });

  test("Compose handler props more than once", async () => {
    const logSpy = jest.spyOn(console, "log");
    const handler1 = () => console.log("first");
    const handler2 = () => console.log("second");
    const handler3 = () => console.log("third");
    const original: Record<string, any> = { a: handler1 };
    const props1: Record<string, any> = { a: handler2 };
    const props2: Record<string, any> = { a: handler3 };
    const composed = composeProps(original, props1, props2);
    composed.a();
    expect(composed).toEqual({
      a: expect.any(Function),
    });
    expect(logSpy).toHaveBeenCalledWith("first");
    expect(logSpy).toHaveBeenCalledWith("second");
    expect(logSpy).toHaveBeenCalledWith("third");
    expect(logSpy).toHaveBeenCalledTimes(3);
  });

  test("Compose className props", async () => {
    const original = { className: "1" };
    const props = { className: "2" };
    const composed = composeProps(original, props);
    expect(composed).toEqual({
      className: "1 2",
    });
  });

  test("Compose unique style props", async () => {
    const original = { style: { color: "blue" } };
    const props = { style: { height: "10%" } };
    const composed = composeProps(original, props);
    expect(composed).toEqual({
      style: {
        color: "blue",
        height: "10%",
      },
    });
  });

  test("Compose unique style props", async () => {
    const original = { style: { color: "blue" } };
    const props = { style: { height: "10%", color: "red" } };
    const composed = composeProps(original, props);
    expect(composed).toEqual({
      style: {
        color: "red",
        height: "10%",
      },
    });
  });
});
