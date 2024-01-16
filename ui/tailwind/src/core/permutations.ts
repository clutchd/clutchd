/**
 * Generates any combination of permutations with a custom separator
 */

export type Permutations<
  Prefix extends string,
  Separator extends string = " ",
  Suffix extends string = Prefix,
> = Prefix extends any
  ?
      | Prefix
      | `${Prefix}${Separator}${Permutations<
          Exclude<Suffix, Prefix>,
          Separator
        >}`
  : never;
