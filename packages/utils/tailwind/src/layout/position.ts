/**
 * The `Position` tailwindcss classes
 * @see https://tailwindcss.com/docs/position
 */
export type Position = "static" | "fixed" | "absolute" | "relative" | "sticky";

export interface WithPosition {
  /**
   * The `Position` tailwindcss classes
   * @see https://tailwindcss.com/docs/position
   */
  position?: Position;
}
