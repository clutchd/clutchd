/**
 * Position
 * @see https://tailwindcss.com/docs/position
 */

export type Position = "static" | "fixed" | "absolute" | "relative" | "sticky";

export interface WithPosition {
  position?: Position;
}
