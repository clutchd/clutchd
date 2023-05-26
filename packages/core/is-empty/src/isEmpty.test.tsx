import { isEmpty } from "./isEmpty";

test("null is empty", async () => {
  expect(isEmpty(null)).toEqual(true);
});

test("undefined is empty", async () => {
  expect(isEmpty(undefined)).toEqual(true);
});

test('"" is empty', async () => {
  expect(isEmpty("")).toEqual(true);
});

test("[] is empty", async () => {
  expect(isEmpty([])).toEqual(true);
});

test("{} is empty", async () => {
  expect(isEmpty({})).toEqual(true);
});

test('"test" is not empty', async () => {
  expect(isEmpty("test")).toEqual(false);
});

test("0 is not empty", async () => {
  expect(isEmpty(0)).toEqual(false);
});

test("1 is not empty", async () => {
  expect(isEmpty(1)).toEqual(false);
});

test("Date is not empty", async () => {
  expect(isEmpty(new Date())).toEqual(false);
});

test("Invalid date is empty", async () => {
  expect(isEmpty(new Date("invalid"))).toEqual(true);
});

test("Function is not empty", async () => {
  expect(
    isEmpty((e: any) => {
      console.log(e);
    })
  ).toEqual(false);
});
