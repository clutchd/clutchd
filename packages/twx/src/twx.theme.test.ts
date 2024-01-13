// unmodified from https://github.com/dcastil/tailwind-merge/blob/main/tests/theme.test.ts v1.14.0

import { expect, test } from "bun:test";
import { extendTwx, fromTheme } from ".";

test("theme scale can be extended", () => {
  const tailwindMerge = extendTwx({
    theme: {
      spacing: ["my-space"],
      margin: ["my-margin"],
    },
  });

  expect(tailwindMerge("p-3 p-my-space p-my-margin")).toBe(
    "p-my-space p-my-margin"
  );
  expect(tailwindMerge("m-3 m-my-space m-my-margin")).toBe("m-my-margin");
});

test("theme object can be extended", () => {
  const tailwindMerge = extendTwx({
    theme: {
      "my-theme": ["hallo", "hello"],
    },
    classGroups: {
      px: [{ px: [fromTheme("my-theme")] }],
    },
  });

  expect(tailwindMerge("p-3 p-hello p-hallo")).toBe("p-3 p-hello p-hallo");
  expect(tailwindMerge("px-3 px-hello px-hallo")).toBe("px-hallo");
});
