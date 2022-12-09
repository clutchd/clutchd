/**
 * {@link https://tailwindcss.com/docs/line-height}
 */

const lineHeight = [
  "leading-3",
  "leading-4",
  "leading-5",
  "leading-6",
  "leading-7",
  "leading-8",
  "leading-9",
  "leading-10",
  "leading-none",
  "leading-tight",
  "leading-snug",
  "leading-normal",
  "leading-relaxed",
  "leading-loose",
] as const;

export type ILineHeight = typeof lineHeight[number];

export interface IWithLineHeight {
  lineHeight?: ILineHeight;
}
