import { expect, test } from "bun:test";
import { isEmpty } from ".";

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

test("date is not empty", async () => {
  expect(isEmpty(new Date())).toEqual(false);
});

test("invalid date is empty", async () => {
  expect(isEmpty(new Date("invalid"))).toEqual(true);
});

test("function is not empty", async () => {
  expect(
    isEmpty((e: unknown) => {
      console.log(e);
    }),
  ).toEqual(false);
});
