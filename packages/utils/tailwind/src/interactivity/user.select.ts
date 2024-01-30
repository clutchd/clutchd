import { WithVariants } from "../core";

/**
 * User Select
 * @see https://tailwindcss.com/docs/user-select
 */

type UserSelectVariants = "none" | "text" | "all" | "auto";

export type UserSelect = WithVariants<"select", UserSelectVariants>;

export interface WithUserSelect {
  userSelect?: UserSelect;
}
