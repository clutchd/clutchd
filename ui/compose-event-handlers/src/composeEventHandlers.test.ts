// import { composeEventHandlers } from ".";
// import { expect, test, mock, spyOn } from "bun:test";
// const log = mock((msg: string) => console.log(msg));

// function getEvent(): Event {
//   return new Event("test", { cancelable: true });
// }

// test("compose 0 valid handlers", async () => {
//   // @ts-ignore
//   const handler = composeEventHandlers();
//   handler(getEvent());
//   expect(log).not.toHaveBeenCalled();
//   expect(log).toHaveBeenCalledTimes(0);
// });

// test("compose 1 valid handlers", async () => {
//   const handler = composeEventHandlers((e) => log("first"));
//   handler(getEvent());
//   expect(log).toHaveBeenCalledWith("first");
//   expect(log).toHaveBeenCalledTimes(1);
// });

// test("compose 2 valid handlers", async () => {
//   const spy = spyOn(console, "log");
//   const handler = composeEventHandlers(
//     (e) => console.log("first"),
//     (e) => console.log("second")
//   );
//   handler(getEvent());
//   expect(spy).toHaveBeenCalledWith("first");
//   expect(spy).toHaveBeenCalledWith("second");
//   expect(spy).toHaveBeenCalledTimes(2);
// });

// test("compose 3 valid handlers", async () => {
//   const spy = spyOn(console, "log");
//   const handler = composeEventHandlers(
//     (e) => console.log("first"),
//     (e) => console.log("second"),
//     (e) => console.log("third")
//   );
//   handler(getEvent());
//   expect(spy).toHaveBeenCalledWith("first");
//   expect(spy).toHaveBeenCalledWith("second");
//   expect(spy).toHaveBeenCalledWith("third");
//   expect(spy).toHaveBeenCalledTimes(3);
// });

// test("compose 3 handlers (2 valid, 1 invalid)", async () => {
//   const spy = spyOn(console, "log");
//   const handler = composeEventHandlers(
//     (e) => console.log("first"),
//     // @ts-ignore
//     undefined,
//     (e) => console.log("third")
//   );
//   handler(getEvent());
//   expect(spy).toHaveBeenCalledWith("first");
//   expect(spy).toHaveBeenCalledWith("third");
//   expect(spy).toHaveBeenCalledTimes(2);
// });

// test("compose 2 valid handlers with defaultPrevented", async () => {
//   const spy = spyOn(console, "log");
//   const handler = composeEventHandlers(
//     (e) => console.log("first"),
//     (e) => console.log("second")
//   );
//   const event = getEvent();
//   event.preventDefault();
//   handler(event);
//   expect(spy).toHaveBeenCalledWith("first");
//   expect(spy).toHaveBeenCalledWith("second");
//   expect(spy).toHaveBeenCalledTimes(2);
// });

// test("compose 3 valid handlers with defaultPrevented", async () => {
//   const spy = spyOn(console, "log");
//   const handler = composeEventHandlers(
//     (e) => console.log("first"),
//     (e) => console.log("second"),
//     (e) => console.log("third")
//   );
//   const event = getEvent();
//   event.preventDefault();
//   handler(event);
//   expect(spy).toHaveBeenCalledWith("first");
//   expect(spy).toHaveBeenCalledWith("second");
//   expect(spy).toHaveBeenCalledWith("third");
//   expect(spy).toHaveBeenCalledTimes(3);
// });

// test("compose 3 handlers with defaultPrevented (2 valid, 1 invalid)", async () => {
//   const spy = spyOn(console, "log");
//   const handler = composeEventHandlers(
//     (e) => console.log("first"),
//     // @ts-ignore
//     undefined,
//     (e) => console.log("third")
//   );
//   const event = getEvent();
//   event.preventDefault();
//   handler(event);
//   expect(spy).toHaveBeenCalledWith("first");
//   expect(spy).toHaveBeenCalledWith("third");
//   expect(spy).toHaveBeenCalledTimes(2);
// });
