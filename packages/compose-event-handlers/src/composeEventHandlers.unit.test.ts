import { composeEventHandlers } from ".";

function getEvent(): Event {
  return new Event("test", { cancelable: true });
}

describe("composeEventHandlers", () => {
  test("Compose 0 valid handlers", async () => {
    const logSpy = jest.spyOn(console, "log");
    // @ts-ignore
    const handler = composeEventHandlers();
    handler(getEvent());
    expect(logSpy).not.toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(0);
  });

  test("Compose 1 valid handlers", async () => {
    const logSpy = jest.spyOn(console, "log");
    const handler = composeEventHandlers((e) => console.log("first"));
    handler(getEvent());
    expect(logSpy).toHaveBeenCalledWith("first");
    expect(logSpy).toHaveBeenCalledTimes(1);
  });

  test("Compose 2 valid handlers", async () => {
    const logSpy = jest.spyOn(console, "log");
    const handler = composeEventHandlers(
      (e) => console.log("first"),
      (e) => console.log("second")
    );
    handler(getEvent());
    expect(logSpy).toHaveBeenCalledWith("first");
    expect(logSpy).toHaveBeenCalledWith("second");
    expect(logSpy).toHaveBeenCalledTimes(2);
  });

  test("Compose 3 valid handlers", async () => {
    const logSpy = jest.spyOn(console, "log");
    const handler = composeEventHandlers(
      (e) => console.log("first"),
      (e) => console.log("second"),
      (e) => console.log("third")
    );
    handler(getEvent());
    expect(logSpy).toHaveBeenCalledWith("first");
    expect(logSpy).toHaveBeenCalledWith("second");
    expect(logSpy).toHaveBeenCalledWith("third");
    expect(logSpy).toHaveBeenCalledTimes(3);
  });

  test("Compose 3 handlers (2 valid, 1 invalid)", async () => {
    const logSpy = jest.spyOn(console, "log");
    const handler = composeEventHandlers(
      (e) => console.log("first"),
      // @ts-ignore
      undefined,
      (e) => console.log("third")
    );
    handler(getEvent());
    expect(logSpy).toHaveBeenCalledWith("first");
    expect(logSpy).toHaveBeenCalledWith("third");
    expect(logSpy).toHaveBeenCalledTimes(2);
  });

  test("Compose 2 valid handlers with defaultPrevented", async () => {
    const logSpy = jest.spyOn(console, "log");
    const handler = composeEventHandlers(
      (e) => console.log("first"),
      (e) => console.log("second")
    );
    const event = getEvent();
    event.preventDefault();
    handler(event);
    expect(logSpy).toHaveBeenCalledWith("first");
    expect(logSpy).toHaveBeenCalledWith("second");
    expect(logSpy).toHaveBeenCalledTimes(2);
  });

  test("Compose 3 valid handlers with defaultPrevented", async () => {
    const logSpy = jest.spyOn(console, "log");
    const handler = composeEventHandlers(
      (e) => console.log("first"),
      (e) => console.log("second"),
      (e) => console.log("third")
    );
    const event = getEvent();
    event.preventDefault();
    handler(event);
    expect(logSpy).toHaveBeenCalledWith("first");
    expect(logSpy).toHaveBeenCalledWith("second");
    expect(logSpy).toHaveBeenCalledWith("third");
    expect(logSpy).toHaveBeenCalledTimes(3);
  });

  test("Compose 3 handlers with defaultPrevented (2 valid, 1 invalid)", async () => {
    const logSpy = jest.spyOn(console, "log");
    const handler = composeEventHandlers(
      (e) => console.log("first"),
      // @ts-ignore
      undefined,
      (e) => console.log("third")
    );
    const event = getEvent();
    event.preventDefault();
    handler(event);
    expect(logSpy).toHaveBeenCalledWith("first");
    expect(logSpy).toHaveBeenCalledWith("third");
    expect(logSpy).toHaveBeenCalledTimes(2);
  });
});
