import { mergeEventHandlers } from ".";

function getEvent(): Event {
  return new Event("test", { cancelable: true });
}

test("merge 0 valid handlers", async () => {
  const logSpy = jest.spyOn(console, "log");
  mergeEventHandlers(getEvent());
  getEvent();
  expect(logSpy).not.toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledTimes(0);
});

test("merge 1 valid handlers", async () => {
  const logSpy = jest.spyOn(console, "log");
  mergeEventHandlers(getEvent(), (e) => console.log("first"));
  getEvent();
  expect(logSpy).toHaveBeenCalledWith("first");
  expect(logSpy).toHaveBeenCalledTimes(1);
});

test("merge 2 valid handlers", async () => {
  const logSpy = jest.spyOn(console, "log");
  mergeEventHandlers(
    getEvent(),
    (e) => console.log("first"),
    (e) => console.log("second"),
  );
  getEvent();
  expect(logSpy).toHaveBeenCalledWith("first");
  expect(logSpy).toHaveBeenCalledWith("second");
  expect(logSpy).toHaveBeenCalledTimes(2);
});

test("compose 3 valid handlers", async () => {
  const logSpy = jest.spyOn(console, "log");
  mergeEventHandlers(
    getEvent(),
    (e) => console.log("first"),
    (e) => console.log("second"),
    (e) => console.log("third"),
  );
  getEvent();
  expect(logSpy).toHaveBeenCalledWith("first");
  expect(logSpy).toHaveBeenCalledWith("second");
  expect(logSpy).toHaveBeenCalledWith("third");
  expect(logSpy).toHaveBeenCalledTimes(3);
});

test("compose 3 handlers (2 valid, 1 invalid)", async () => {
  const logSpy = jest.spyOn(console, "log");
  mergeEventHandlers(
    getEvent(),
    (e) => console.log("first"),
    undefined,
    (e) => console.log("third"),
  );
  getEvent();
  expect(logSpy).toHaveBeenCalledWith("first");
  expect(logSpy).toHaveBeenCalledWith("third");
  expect(logSpy).toHaveBeenCalledTimes(2);
});

test("compose 2 valid handlers with defaultPrevented", async () => {
  const logSpy = jest.spyOn(console, "log");
  mergeEventHandlers(
    getEvent(),
    (e) => console.log("first"),
    (e) => console.log("second"),
  );
  getEvent()?.preventDefault();
  expect(logSpy).toHaveBeenCalledWith("first");
  expect(logSpy).toHaveBeenCalledWith("second");
  expect(logSpy).toHaveBeenCalledTimes(2);
});

test("compose 3 valid handlers with defaultPrevented", async () => {
  const logSpy = jest.spyOn(console, "log");
  mergeEventHandlers(
    getEvent(),
    (e) => console.log("first"),
    (e) => console.log("second"),
    (e) => console.log("third"),
  );
  getEvent()?.preventDefault();
  expect(logSpy).toHaveBeenCalledWith("first");
  expect(logSpy).toHaveBeenCalledWith("second");
  expect(logSpy).toHaveBeenCalledWith("third");
  expect(logSpy).toHaveBeenCalledTimes(3);
});

test("compose 3 handlers with defaultPrevented (2 valid, 1 invalid)", async () => {
  const logSpy = jest.spyOn(console, "log");
  mergeEventHandlers(
    getEvent(),
    (e) => console.log("first"),
    undefined,
    (e) => console.log("third"),
  );
  getEvent()?.preventDefault();
  expect(logSpy).toHaveBeenCalledWith("first");
  expect(logSpy).toHaveBeenCalledWith("third");
  expect(logSpy).toHaveBeenCalledTimes(2);
});
