import { clsx } from ".";

test("exports", () => {
  expect(typeof clsx).toEqual("function");
  expect(typeof clsx()).toEqual("string");
});
