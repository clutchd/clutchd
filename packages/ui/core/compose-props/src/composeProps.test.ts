import { composeProps } from ".";

test("compose no props", async () => {
  const composed = composeProps();

  expect(composed).toEqual({});
});

test("compose unique generic props", async () => {
  const original = { a: "1" };
  const props = { b: "2" };
  const composed = composeProps(original, props);

  expect(composed).toEqual({
    a: "1",
    b: "2",
  });
});

test("compose unique handler props", async () => {
  const handler = jest.fn();

  const original: Record<string, unknown> = { a: handler };
  const props: Record<string, unknown> = { b: handler };
  const composed = composeProps(original, props);

  expect(composed).toEqual({
    a: handler,
    b: handler,
  });
});

test("compose incompatible handler props", async () => {
  const handler = jest.fn();

  const original: Record<string, unknown> = { a: "hello" };
  const props: Record<string, unknown> = { a: handler };
  const composed = composeProps(original, props);

  const composedSpy = jest.spyOn(composed, "a");
  composed.a();

  expect(composed).toEqual({
    a: expect.any(Function),
  });

  expect(handler).toHaveBeenCalledTimes(1);
  expect(composedSpy).toHaveBeenCalledTimes(1);
});

test("compose multiple incompatible handler props", async () => {
  const handler1 = jest.fn();
  const handler2 = jest.fn();

  const original: Record<string, unknown> = { a: handler1 };
  const props1: Record<string, unknown> = { a: "hello" };
  const props2: Record<string, unknown> = { a: handler2 };
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

test("compose handler props more than once", async () => {
  const handler1 = jest.fn();
  const handler2 = jest.fn();
  const handler3 = jest.fn();

  const original: Record<string, unknown> = { a: handler1 };
  const props1: Record<string, unknown> = { a: handler2 };
  const props2: Record<string, unknown> = { a: handler3 };
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

test("compose className props", async () => {
  const original = { className: "1" };
  const props = { className: "2" };
  const composed = composeProps(original, props);

  expect(composed).toEqual({
    className: "1 2",
  });
});

test("compose unique style props", async () => {
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

test("compose unique style props", async () => {
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
