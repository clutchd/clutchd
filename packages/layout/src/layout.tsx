import { clsx } from "@clutchd/clsx";

/**
 * Type to define `Layout` props shared by all component
 */
interface ILayoutProps {
  col?: boolean;
  padding?: boolean;
  row?: boolean;
}

/**
 * Dynamically builds classes shared by all `Layout` components
 * @param props `ILayoutProps` used to build a `Layout` component's style
 * @returns Classes to be used for styling a `Layout` component
 */
function BuildStyle({ col, padding, row }: ILayoutProps): string {
  return clsx(
    col ? "flex-col" : "",
    padding ? "p-6 sm:p-8" : "",
    row ? "flex-row" : ""
  );
}

export { BuildStyle };
export type { ILayoutProps };
