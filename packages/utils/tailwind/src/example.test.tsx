// TODO: Add tests for this package
test("example test", () => {
  const logSpy = jest.spyOn(console, "log");
  console.log("logged");
  expect(logSpy).toHaveBeenCalledWith("logged");
  expect(logSpy).toHaveBeenCalledTimes(1);
});
