/**
 * Generates a Key with required Variants
 */

export type WithVariants<
  Key extends string,
  Variants extends string
> = `${Key}-${Variants}`;

/**
 * Generates a Key with optional Variants
 */

export type WithOptionalVariants<Key extends string, Variants extends string> =
  | Key
  | `${Key}-${Variants}`;
