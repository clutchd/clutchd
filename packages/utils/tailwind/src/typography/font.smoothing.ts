/**
 * Font Smoothing
 * @see https://tailwindcss.com/docs/font-smoothing
 */

export type FontSmoothing = "antialiased" | "subpixel-antialiased";

export interface WithFontSmoothing {
  fontSmoothing?: FontSmoothing;
}
