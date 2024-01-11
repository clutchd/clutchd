import { expect, spyOn, test } from "bun:test";

test("example test", () => {
  const spy = spyOn(console, "log");
  console.log("logged");
  expect(spy).toHaveBeenCalledWith("logged");
  expect(spy).toHaveBeenCalledTimes(1);
});
