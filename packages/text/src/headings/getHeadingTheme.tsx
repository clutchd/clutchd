import { getTheme, PaletteColor } from "@clutchd/tailwind";

function getHeadingTheme(theme: "none" | PaletteColor) {
  return getTheme(theme, {
    slate: "text-slate-900 dark:text-slate-50",
    gray: "text-gray-900 dark:text-gray-50",
    zinc: "text-zinc-900 dark:text-zinc-50",
    neutral: "text-neutral-900 dark:text-neutral-50",
    stone: "text-stone-900 dark:text-stone-50",
    red: "text-red-900 dark:text-red-50",
    orange: "text-orange-900 dark:text-orange-50",
    amber: "text-amber-900 dark:text-amber-50",
    yellow: "text-yellow-900 dark:text-yellow-50",
    lime: "text-lime-900 dark:text-lime-50",
    green: "text-green-900 dark:text-green-50",
    emerald: "text-emerald-900 dark:text-emerald-50",
    teal: "text-teal-900 dark:text-teal-50",
    cyan: "text-cyan-900 dark:text-cyan-50",
    sky: "text-sky-900 dark:text-sky-50",
    blue: "text-blue-900 dark:text-blue-50",
    indigo: "text-indigo-900 dark:text-indigo-50",
    violet: "text-violet-900 dark:text-violet-50",
    purple: "text-purple-900 dark:text-purple-50",
    fuchsia: "text-fuchsia-900 dark:text-fuchsia-50",
    pink: "text-pink-900 dark:text-pink-50",
    rose: "text-rose-900 dark:text-rose-50",
  });
}

export { getHeadingTheme };
