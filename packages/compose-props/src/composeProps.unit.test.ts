import { composeProps } from ".";

describe("composeProps", () => {
  test("Compose no props", async () => {
    const composed = composeProps();

    expect(composed).toEqual({});
  });

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
    const handler = jest.fn();

    const original: Record<string, any> = { a: handler };
    const props: Record<string, any> = { b: handler };
    const composed = composeProps(original, props);

    expect(composed).toEqual({
      a: handler,
      b: handler,
    });
  });

  test("Compose incompatible handler props", async () => {
    const handler = jest.fn();

    const original: Record<string, any> = { a: "hello" };
    const props: Record<string, any> = { a: handler };
    const composed = composeProps(original, props);

    const composedSpy = jest.spyOn(composed, "a");
    composed.a();

    expect(composed).toEqual({
      a: expect.any(Function),
    });

    expect(handler).toHaveBeenCalledTimes(1);
    expect(composedSpy).toHaveBeenCalledTimes(1);
  });

  test("Compose multiple incompatible handler props", async () => {
    const handler1 = jest.fn();
    const handler2 = jest.fn();

    const original: Record<string, any> = { a: handler1 };
    const props1: Record<string, any> = { a: "hello" };
    const props2: Record<string, any> = { a: handler2 };
    const composed = composeProps(original, props1, props2);

    const composedSpy = jest.spyOn(composed, "a");
    composed.a();

    expect(composed).toEqual({
      a: expect.any(Function),
    });
    expect(handler1).toHaveBeenCalledTimes(0);
    expect(handler2).toHaveBeenCalledTimes(1);
    expect(composedSpy).toHaveBeenCalledTimes(1);
  });

  test("Compose handler props more than once", async () => {
    const handler1 = jest.fn();
    const handler2 = jest.fn();
    const handler3 = jest.fn();

    const original: Record<string, any> = { a: handler1 };
    const props1: Record<string, any> = { a: handler2 };
    const props2: Record<string, any> = { a: handler3 };
    const composed = composeProps(original, props1, props2);

    const composedSpy = jest.spyOn(composed, "a");
    composed.a();

    expect(composed).toEqual({
      a: expect.any(Function),
    });
    expect(handler1).toHaveBeenCalledTimes(1);
    expect(handler2).toHaveBeenCalledTimes(1);
    expect(handler3).toHaveBeenCalledTimes(1);
    expect(composedSpy).toHaveBeenCalledTimes(1);
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
