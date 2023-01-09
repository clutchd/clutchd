import { clsx } from "@clutchd/clsx";
import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { Col, Row } from "@clutchd/flex";

/**
 * Type to define `Footer` component
 */
type IFooter = typeof Footer;

/**
 * Type to define `Footer` props
 */
interface IFooterProps
  extends IComponentPropsWithoutRef<typeof Component.footer> {
  direction?: "col" | "row";
  padding?: boolean;
}

/**
 * `Footer` - A `Container` designed to contain a page's footer content. Renders as a `footer` element
 * @param props `IFooterProps` used to render this `Footer`
 * @returns `Footer` component
 */
function Footer({
  children,
  className,
  direction = "row",
  padding = true,
  ...props
}: IFooterProps) {
  const classNames = clsx(padding ? "p-6 sm:p-8" : "", className);

  // if row, return row
  if (direction === "row") {
    return (
      <Row asChild className={classNames} {...props}>
        <footer>{children}</footer>
      </Row>
    );
  }

  // otherwise, return col
  return (
    <Col asChild className={classNames} {...props}>
      <footer>{children}</footer>
    </Col>
  );
}

Footer.displayName = "Footer";

export { Footer };
export type { IFooter, IFooterProps };
