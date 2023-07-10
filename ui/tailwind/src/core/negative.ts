/**
 * Negative Values
 * @see https://tailwindcss.com/docs/top-right-bottom-left#using-negative-values
 * @see https://tailwindcss.com/docs/text-indent#using-negative-values
 * @see https://tailwindcss.com/docs/margin#using-negative-values
 */

export type Negative<T extends string> = `-${T}`;

export type WithNegative<T extends string> = `${T}` | Negative<T>;
