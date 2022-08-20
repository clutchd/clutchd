import { IsEmpty } from "./isEmpty";

describe("IsEmpty", () => {
  test("null is empty", async () => {
    expect(IsEmpty(null)).toEqual(true);
  });

  test("undefined is empty", async () => {
    expect(IsEmpty(undefined)).toEqual(true);
  });

  test('"" is empty', async () => {
    expect(IsEmpty("")).toEqual(true);
  });

  test("[] is empty", async () => {
    expect(IsEmpty([])).toEqual(true);
  });

  test("{} is empty", async () => {
    expect(IsEmpty({})).toEqual(true);
  });

  test('"test" is not empty', async () => {
    expect(IsEmpty("test")).toEqual(false);
  });

  test("0 is not empty", async () => {
    expect(IsEmpty(0)).toEqual(false);
  });

  test("1 is not empty", async () => {
    expect(IsEmpty(1)).toEqual(false);
  });
});
