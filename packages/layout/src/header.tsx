import { clsx } from "@clutchd/clsx";
import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { Col, Row } from "@clutchd/flex";

/**
 * Type to define `Header` component
 */
type IHeader = typeof Header;

/**
 * Type to define `Header` props
 */
interface IHeaderProps
  extends IComponentPropsWithoutRef<typeof Component.header> {
  direction?: "col" | "row";
  padding?: boolean;
}

/**
 * `Header` - A `Container` designed to contain a page's header content. Renders as a `header` element
 * @param props `IHeaderProps` used to render this `Header`
 * @returns `Header` component
 */
function Header({
  children,
  className,
  direction = "row",
  padding = true,
  ...props
}: IHeaderProps) {
  const classNames = clsx(padding ? "p-6 sm:p-8" : "", className);

  // if row, return row
  if (direction === "row") {
    return (
      <Row asChild className={classNames} {...props}>
        <header>{children}</header>
      </Row>
    );
  }

  // otherwise, return col
  return (
    <Col asChild className={classNames} {...props}>
      <header>{children}</header>
    </Col>
  );
}

Header.displayName = "Header";

export { Header };
export type { IHeader, IHeaderProps };
