/**
 * Generates any combination of permutations with a custom separator.  Beware, this can exponentially increase types.
 */
export type Permutations<
  Prefix extends string,
  Separator extends string = " ",
  Suffix extends string = Prefix,
> = Prefix extends unknown
  ?
      | Prefix
      | `${Prefix}${Separator}${Permutations<
          Exclude<Suffix, Prefix>,
          Separator
        >}`
  : never;
