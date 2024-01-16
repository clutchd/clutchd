import { WithNegative, WithOptVariants, WithVariants } from ".";

/**
 * Extracts a Key from a type and combines with all provided required variants
 */

export type ExtractKeyWithVariants<
  KeyType extends string,
  KeyUnion extends KeyType,
  Variants extends string,
> = WithVariants<Extract<KeyType, KeyUnion>, Variants>;

/**
 * Extracts a Key from a type and combines with all provided optional variants
 */

export type ExtractKeyWithOptVariants<
  KeyType extends string,
  KeyUnion extends KeyType,
  Variants extends string,
> = WithOptVariants<Extract<KeyType, KeyUnion>, Variants>;

/**
 * Extracts a Key from a type and combines with it's negative
 */

export type ExtractKeyWithNegative<
  KeyType extends string,
  KeyUnion extends KeyType,
> = WithNegative<Extract<KeyType, KeyUnion>>;

/**
 * Extracts a Key from a type and combines with it's negative as well as with all provided required variants
 */

export type ExtractKeyWithNegativeVariants<
  KeyType extends string,
  KeyUnion extends KeyType,
  Variants extends string,
> = WithVariants<ExtractKeyWithNegative<KeyType, KeyUnion>, Variants>;

/**
 * Extracts a Key from a type and combines with it's negative as well as all provided optional variants
 */

export type ExtractKeyWithOptNegativeVariants<
  KeyType extends string,
  KeyUnion extends KeyType,
  Variants extends string,
> = WithOptVariants<ExtractKeyWithNegative<KeyType, KeyUnion>, Variants>;
