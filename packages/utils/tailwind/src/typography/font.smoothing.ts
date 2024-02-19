/**
 * The `Font Smoothing` tailwindcss classes.
 * @see https://tailwindcss.com/docs/font-smoothing
 */
export type FontSmoothing = "antialiased" | "subpixel-antialiased";

export interface WithFontSmoothing {
  /**
   * The `Font Smoothing` tailwindcss classes.
   * @see https://tailwindcss.com/docs/font-smoothing
   */
  fontSmoothing?: FontSmoothing;
}
