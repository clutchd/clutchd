// import { mergeEventHandlers } from ".";
// import { expect, test, spyOn } from "bun:test";

// function getEvent(): Event {
//   return new Event("test", { cancelable: true });
// }

// test("merge 0 valid handlers", async () => {
//   const spy = spyOn(console, "log");
//   mergeEventHandlers(getEvent());
//   getEvent();
//   expect(spy).not.toHaveBeenCalled();
//   expect(spy).toHaveBeenCalledTimes(0);
// });

// test("merge 1 valid handlers", async () => {
//   const spy = spyOn(console, "log");
//   mergeEventHandlers(getEvent(), (e) => console.log("first"));
//   getEvent();
//   expect(spy).toHaveBeenCalledWith("first");
//   expect(spy).toHaveBeenCalledTimes(1);
// });

// test("merge 2 valid handlers", async () => {
//   const spy = spyOn(console, "log");
//   mergeEventHandlers(
//     getEvent(),
//     (e) => console.log("first"),
//     (e) => console.log("second")
//   );
//   getEvent();
//   expect(spy).toHaveBeenCalledWith("first");
//   expect(spy).toHaveBeenCalledWith("second");
//   expect(spy).toHaveBeenCalledTimes(2);
// });

// test("compose 3 valid handlers", async () => {
//   const spy = spyOn(console, "log");
//   mergeEventHandlers(
//     getEvent(),
//     (e) => console.log("first"),
//     (e) => console.log("second"),
//     (e) => console.log("third")
//   );
//   getEvent();
//   expect(spy).toHaveBeenCalledWith("first");
//   expect(spy).toHaveBeenCalledWith("second");
//   expect(spy).toHaveBeenCalledWith("third");
//   expect(spy).toHaveBeenCalledTimes(3);
// });

// test("compose 3 handlers (2 valid, 1 invalid)", async () => {
//   const spy = spyOn(console, "log");
//   mergeEventHandlers(
//     getEvent(),
//     (e) => console.log("first"),
//     undefined,
//     (e) => console.log("third")
//   );
//   getEvent();
//   expect(spy).toHaveBeenCalledWith("first");
//   expect(spy).toHaveBeenCalledWith("third");
//   expect(spy).toHaveBeenCalledTimes(2);
// });

// test("compose 2 valid handlers with defaultPrevented", async () => {
//   const spy = spyOn(console, "log");
//   mergeEventHandlers(
//     getEvent(),
//     (e) => console.log("first"),
//     (e) => console.log("second")
//   );
//   getEvent()?.preventDefault();
//   expect(spy).toHaveBeenCalledWith("first");
//   expect(spy).toHaveBeenCalledWith("second");
//   expect(spy).toHaveBeenCalledTimes(2);
// });

// test("compose 3 valid handlers with defaultPrevented", async () => {
//   const spy = spyOn(console, "log");
//   mergeEventHandlers(
//     getEvent(),
//     (e) => console.log("first"),
//     (e) => console.log("second"),
//     (e) => console.log("third")
//   );
//   getEvent()?.preventDefault();
//   expect(spy).toHaveBeenCalledWith("first");
//   expect(spy).toHaveBeenCalledWith("second");
//   expect(spy).toHaveBeenCalledWith("third");
//   expect(spy).toHaveBeenCalledTimes(3);
// });

// test("compose 3 handlers with defaultPrevented (2 valid, 1 invalid)", async () => {
//   const spy = spyOn(console, "log");
//   mergeEventHandlers(
//     getEvent(),
//     (e) => console.log("first"),
//     undefined,
//     (e) => console.log("third")
//   );
//   getEvent()?.preventDefault();
//   expect(spy).toHaveBeenCalledWith("first");
//   expect(spy).toHaveBeenCalledWith("third");
//   expect(spy).toHaveBeenCalledTimes(2);
// });
