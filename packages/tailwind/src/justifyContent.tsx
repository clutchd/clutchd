/**
 * {@link https://tailwindcss.com/docs/justify-content}
 */

const justifyContent = [
  "justify-start",
  "justify-end",
  "justify-center",
  "justify-between",
  "justify-around",
  "justify-evenly",
] as const;

export type IJustifyContent = typeof justifyContent[number];

export interface IWithJustifyContent {
  justifyContent?: IJustifyContent;
}
