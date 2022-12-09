/**
 * {@link https://tailwindcss.com/docs/flex-direction}
 */

const flexDirection = [
  "flex-row",
  "flex-row-reverse",
  "flex-col",
  "flex-col-reverse",
] as const;

export type IFlexDirection = typeof flexDirection[number];

export interface IWithFlexDirection {
  flexDirection?: IFlexDirection;
}
