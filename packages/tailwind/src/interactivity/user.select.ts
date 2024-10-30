import type { WithVariants } from "../core";

type UserSelectVariants = "none" | "text" | "all" | "auto";

/**
 * The `User Select` tailwindcss classes.
 * @see https://tailwindcss.com/docs/user-select
 */
export type UserSelect = WithVariants<"select", UserSelectVariants>;

export interface WithUserSelect {
  /**
   * The `User Select` tailwindcss classes.
   * @see https://tailwindcss.com/docs/user-select
   */
  userSelect?: UserSelect;
}
