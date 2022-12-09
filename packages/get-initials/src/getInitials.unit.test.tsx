import { GetInitials } from "./getInitials";

describe("GetInitials", () => {
  test('null is "U"', async () => {
    //@ts-ignore
    expect(GetInitials(null)).toEqual("U");
  });

  test('undefined is "U"', async () => {
    //@ts-ignore
    expect(GetInitials(undefined)).toEqual("U");
  });

  test('("") is "U"', async () => {
    expect(GetInitials("")).toEqual("U");
  });

  test('("tim") is "T"', async () => {
    expect(GetInitials("tim")).toEqual("T");
  });

  test('("Tim") is "T"', async () => {
    expect(GetInitials("Tim")).toEqual("T");
  });

  test('("Tim Cook") is "TC"', async () => {
    expect(GetInitials("Tim Cook")).toEqual("TC");
  });

  test('("Tim", "Cook") is "TC"', async () => {
    expect(GetInitials("Tim", "Cook")).toEqual("TC");
  });

  test('("Tim Apple Cook") is "TC"', async () => {
    expect(GetInitials("Tim Apple Cook")).toEqual("TC");
  });

  test('("Tim Apple ", "Cook") is "TC"', async () => {
    expect(GetInitials("Tim Apple ", "Cook")).toEqual("TC");
  });

  test('"Tim Johnny Appleseed Cook" is "TC"', async () => {
    expect(GetInitials("Tim Johnny Appleseed Cook")).toEqual("TC");
  });

  test('("Tim", "Johnny Appleseed", "Cook") is "TC"', async () => {
    expect(GetInitials("Tim", "Johnny Appleseed", "Cook")).toEqual("TC");
  });
});
