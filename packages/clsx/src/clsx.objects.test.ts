import { clsx } from ".";

test("objects", () => {
  expect(clsx({})).toEqual("");
  expect(clsx({ foo: true })).toEqual("foo");
  expect(clsx({ foo: true, bar: false })).toEqual("foo");
  expect(clsx({ foo: "hiya", bar: 1 })).toEqual("foo bar");
  expect(clsx({ foo: 1, bar: 0, baz: 1 })).toEqual("foo baz");
  expect(clsx({ "-foo": 1, "--bar": 1 })).toEqual("-foo --bar");
});

test("objects (variadic)", () => {
  expect(clsx({}, {})).toEqual("");
  expect(clsx({ foo: 1 }, { bar: 2 })).toEqual("foo bar");
  expect(clsx({ foo: 1 }, null, { baz: 1, bat: 0 })).toEqual("foo baz");
  expect(
    clsx(
      { foo: 1 },
      {},
      {},
      { bar: "a" },
      { baz: null, bat: Number.POSITIVE_INFINITY },
    ),
  ).toEqual("foo bar bat");
});
