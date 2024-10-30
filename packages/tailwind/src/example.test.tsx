import { expect, test, spyOn } from "bun:test"

// TODO: Add tests
test("example test", () => {
  const logSpy = spyOn(console, "log").mockReset();
  console.log("logged");
  expect(logSpy).toHaveBeenCalledWith("logged");
  expect(logSpy).toHaveBeenCalledTimes(1);
});
