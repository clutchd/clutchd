/**
 * {@link https://tailwindcss.com/docs/font-size}
 */

const fontSize = [
  "text-xs",
  "text-sm",
  "text-base",
  "text-lg",
  "text-xl",
  "text-2xl",
  "text-3xl",
  "text-4xl",
  "text-5xl",
  "text-6xl",
  "text-7xl",
  "text-8xl",
  "text-9xl",
];

type IFontSize = typeof fontSize[number];

interface IWithFontSize {
  fontSize: IFontSize;
}

export { fontSize };
export type { IFontSize, IWithFontSize };
