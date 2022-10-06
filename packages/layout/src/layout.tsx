import clsx from "clsx";

interface ILayoutProps {
  col?: boolean;
  padding?: boolean;
  row?: boolean;
}

function BuildStyle({ col, padding, row }: ILayoutProps): string {
  return clsx(
    col ? "flex-col" : "",
    padding ? "p-6 sm:p-8" : "",
    row ? "flex-row" : ""
  );
}

export { BuildStyle };
export type { ILayoutProps };
