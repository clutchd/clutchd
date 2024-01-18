// unmodified from https://github.com/dcastil/tailwind-merge/blob/main/tests/lazy-initialization.test.ts v1.14.0

import { createTwx, getDefaultConfig } from ".";

test("lazy initialization", () => {
  const initMock = jest.fn(getDefaultConfig);
  const twMerge = createTwx(initMock);

  expect(initMock).not.toHaveBeenCalled();

  twMerge();

  expect(initMock).toHaveBeenCalledTimes(1);

  twMerge();
  twMerge("");
  twMerge("px-2 p-3 p-4");

  expect(initMock).toHaveBeenCalledTimes(1);
});
