import { expect, test, spyOn } from "bun:test";
import { composeEventHandlers } from ".";

function getEvent(): Event {
  return new Event("test", { cancelable: true });
}

test("compose 0 valid handlers", async () => {
  const logSpy = spyOn(console, "log").mockReset();
  // @ts-ignore
  const handler = composeEventHandlers();
  handler(getEvent());
  expect(logSpy).not.toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledTimes(0);
});

test("compose 1 valid handlers", async () => {
  const logSpy = spyOn(console, "log").mockReset();
  const handler = composeEventHandlers(() => console.log("first"));
  handler(getEvent());
  expect(logSpy).toHaveBeenCalledWith("first");
  expect(logSpy).toHaveBeenCalledTimes(1);
});

test("compose 2 valid handlers", async () => {
  const logSpy = spyOn(console, "log").mockReset();
  const handler = composeEventHandlers(
    () => console.log("first"),
    () => console.log("second"),
  );
  handler(getEvent());
  expect(logSpy).toHaveBeenCalledWith("first");
  expect(logSpy).toHaveBeenCalledWith("second");
  expect(logSpy).toHaveBeenCalledTimes(2);
});

test("compose 3 valid handlers", async () => {
  const logSpy = spyOn(console, "log").mockReset();
  const handler = composeEventHandlers(
    () => console.log("first"),
    () => console.log("second"),
    () => console.log("third"),
  );
  handler(getEvent());
  expect(logSpy).toHaveBeenCalledWith("first");
  expect(logSpy).toHaveBeenCalledWith("second");
  expect(logSpy).toHaveBeenCalledWith("third");
  expect(logSpy).toHaveBeenCalledTimes(3);
});

test("compose 3 handlers (2 valid, 1 invalid)", async () => {
  const logSpy = spyOn(console, "log").mockReset();
  const handler = composeEventHandlers(
    () => console.log("first"),
    // @ts-ignore
    undefined,
    () => console.log("third"),
  );
  handler(getEvent());
  expect(logSpy).toHaveBeenCalledWith("first");
  expect(logSpy).toHaveBeenCalledWith("third");
  expect(logSpy).toHaveBeenCalledTimes(2);
});

test("compose 2 valid handlers with defaultPrevented", async () => {
  const logSpy = spyOn(console, "log").mockReset();
  const handler = composeEventHandlers(
    () => console.log("first"),
    () => console.log("second"),
  );
  const event = getEvent();
  event.preventDefault();
  handler(event);
  expect(logSpy).toHaveBeenCalledWith("first");
  expect(logSpy).toHaveBeenCalledWith("second");
  expect(logSpy).toHaveBeenCalledTimes(2);
});

test("compose 3 valid handlers with defaultPrevented", async () => {
  const logSpy = spyOn(console, "log").mockReset();
  const handler = composeEventHandlers(
    () => console.log("first"),
    () => console.log("second"),
    () => console.log("third"),
  );
  const event = getEvent();
  event.preventDefault();
  handler(event);
  expect(logSpy).toHaveBeenCalledWith("first");
  expect(logSpy).toHaveBeenCalledWith("second");
  expect(logSpy).toHaveBeenCalledWith("third");
  expect(logSpy).toHaveBeenCalledTimes(3);
});

test("compose 3 handlers with defaultPrevented (2 valid, 1 invalid)", async () => {
  const logSpy = spyOn(console, "log").mockReset();
  const handler = composeEventHandlers(
    () => console.log("first"),
    // @ts-ignore
    undefined,
    () => console.log("third"),
  );
  const event = getEvent();
  event.preventDefault();
  handler(event);
  expect(logSpy).toHaveBeenCalledWith("first");
  expect(logSpy).toHaveBeenCalledWith("third");
  expect(logSpy).toHaveBeenCalledTimes(2);
});
