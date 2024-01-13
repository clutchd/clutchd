import { expect, test } from "bun:test";
import { clsx } from ".";

test("numbers", () => {
  expect(clsx(1)).toEqual("1");
  expect(clsx(12)).toEqual("12");
  expect(clsx(0.1)).toEqual("0.1");
  expect(clsx(0)).toEqual("");

  expect(clsx(Infinity)).toEqual("Infinity");
  expect(clsx(NaN)).toEqual("");
});

test("numbers (variadic)", () => {
  expect(clsx(0, 1)).toEqual("1");
  expect(clsx(1, 2)).toEqual("1 2");
});
