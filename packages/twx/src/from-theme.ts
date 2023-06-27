// https://github.com/dcastil/tailwind-merge/blob/main/src/lib/from-theme.ts

import { ThemeGetter, ThemeObject } from "./types";

export function fromTheme(key: string): ThemeGetter {
  const themeGetter = (theme: ThemeObject) => theme[key] || [];
  themeGetter.isThemeGetter = true as const;
  return themeGetter;
}
