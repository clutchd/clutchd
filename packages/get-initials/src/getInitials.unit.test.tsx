import { getInitials } from "./getInitials";

describe("getInitials", () => {
  test('null is "U"', async () => {
    //@ts-ignore
    expect(getInitials(null)).toEqual("U");
  });

  test('undefined is "U"', async () => {
    //@ts-ignore
    expect(getInitials(undefined)).toEqual("U");
  });

  test('("") is "U"', async () => {
    expect(getInitials("")).toEqual("U");
  });

  test('("tim") is "T"', async () => {
    expect(getInitials("tim")).toEqual("T");
  });

  test('("tim", "") is "T"', async () => {
    expect(getInitials("tim", "")).toEqual("T");
  });

  test('("tim", " ") is "T"', async () => {
    expect(getInitials("tim", " ")).toEqual("T");
  });

  test('("Tim") is "T"', async () => {
    expect(getInitials("Tim")).toEqual("T");
  });

  test('("Tim Cook") is "TC"', async () => {
    expect(getInitials("Tim Cook")).toEqual("TC");
  });

  test('("Tim", "Cook") is "TC"', async () => {
    expect(getInitials("Tim", "Cook")).toEqual("TC");
  });

  test('("Tim", "", "Cook") is "TC"', async () => {
    expect(getInitials("Tim", "", "Cook")).toEqual("TC");
  });

  test('("Tim", " ", "Cook") is "TC"', async () => {
    expect(getInitials("Tim", " ", "Cook")).toEqual("TC");
  });

  test('("tim", " ") is "T"', async () => {
    expect(getInitials("tim", " ")).toEqual("T");
  });

  test('("Tim Apple Cook") is "TC"', async () => {
    expect(getInitials("Tim Apple Cook")).toEqual("TC");
  });

  test('("Tim Apple ", "Cook") is "TC"', async () => {
    expect(getInitials("Tim Apple ", "Cook")).toEqual("TC");
  });

  test('"Tim Johnny Appleseed Cook" is "TC"', async () => {
    expect(getInitials("Tim Johnny Appleseed Cook")).toEqual("TC");
  });

  test('("Tim", "Johnny Appleseed", "Cook") is "TC"', async () => {
    expect(getInitials("Tim", "Johnny Appleseed", "Cook")).toEqual("TC");
  });
});
