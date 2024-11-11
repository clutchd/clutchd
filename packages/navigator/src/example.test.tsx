import { expect, spyOn, test } from "bun:test";

// TODO: Add tests
test("example test", () => {
  const logSpy = spyOn(console, "log");
  console.log("logged");
  expect(logSpy).toHaveBeenCalledWith("logged");
  expect(logSpy).toHaveBeenCalledTimes(1);
});
