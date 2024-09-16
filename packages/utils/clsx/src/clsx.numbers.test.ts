import { clsx } from ".";

test("numbers", () => {
  expect(clsx(1)).toEqual("1");
  expect(clsx(12)).toEqual("12");
  expect(clsx(0.1)).toEqual("0.1");
  expect(clsx(0)).toEqual("");

  expect(clsx(Number.POSITIVE_INFINITY)).toEqual("Infinity");
  expect(clsx(Number.NaN)).toEqual("");
});

test("numbers (variadic)", () => {
  expect(clsx(0, 1)).toEqual("1");
  expect(clsx(1, 2)).toEqual("1 2");
});
