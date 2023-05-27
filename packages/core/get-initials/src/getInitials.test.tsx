import { getInitials } from "./getInitials";

test("handles null", async () => {
  // @ts-ignore
  expect(getInitials(null)).toEqual("U");
});

test("handles undefined", async () => {
  // @ts-ignore
  expect(getInitials(undefined)).toEqual("U");
});

test("handles empty string", async () => {
  expect(getInitials("")).toEqual("U");
});

test("handles lowercase string", async () => {
  expect(getInitials("tim")).toEqual("T");
});

test("handles lowercase string and empty string", async () => {
  expect(getInitials("tim", "")).toEqual("T");
});

test("handles lowercase string and whitespace", async () => {
  expect(getInitials("tim", " ")).toEqual("T");
});

test("handles string", async () => {
  expect(getInitials("Tim")).toEqual("T");
});

test("handles 2 names in 1 string", async () => {
  expect(getInitials("Tim Cook")).toEqual("TC");
});

test("handles 2 strings", async () => {
  expect(getInitials("Tim", "Cook")).toEqual("TC");
});

test("handles multiple valid strings and empty string", async () => {
  expect(getInitials("Tim", "", "Cook")).toEqual("TC");
});

test("handles multiple valid strings and whitespace string", async () => {
  expect(getInitials("Tim", " ", "Cook")).toEqual("TC");
});

test("handles multiple names in 1 string", async () => {
  expect(getInitials("Tim Apple Cook")).toEqual("TC");
});

test("handles multiple names in 1 string and multiple strings", async () => {
  expect(getInitials("Tim Apple ", "Cook")).toEqual("TC");
});

test("handles 4 names in 1 string", async () => {
  expect(getInitials("Tim Johnny Appleseed Cook")).toEqual("TC");
});

test("handles multiple strings with multiple names", async () => {
  expect(getInitials("Tim Boss-man", "Johnny Appleseed", "Cook")).toEqual("TC");
});
