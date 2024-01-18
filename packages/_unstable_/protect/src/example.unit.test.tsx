describe("Example", () => {
  test("Example Test", () => {
    const logSpy = jest.spyOn(console, "log");
    console.log("logged");
    expect(logSpy).toHaveBeenCalledWith("logged");
    expect(logSpy).toHaveBeenCalledTimes(1);
  });
});
