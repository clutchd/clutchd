import { expect, test } from "bun:test";
import { clsx } from ".";

test("functions", () => {
  const foo = () => {};
  expect(clsx(foo, "hello")).toEqual("hello");
  expect(clsx(foo, "hello", clsx)).toEqual("hello");
  expect(clsx(foo, "hello", [[clsx], "world"])).toEqual("hello world");
});
