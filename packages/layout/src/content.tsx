import { clsx } from "@clutchd/clsx";
import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { Col, Row } from "@clutchd/flex";

/**
 * Type to define `Content` component
 */
type IContent = typeof Content;

/**
 * Type to define `Content` props
 */
interface IContentProps
  extends IComponentPropsWithoutRef<typeof Component.main> {
  direction?: "col" | "row";
  padding?: boolean;
}

/**
 * `Content` - A `Container` designed to contain a page's primary content. Renders as a `main` element
 * @param props `IContentProps` used to render this `Content`
 * @returns `Content` component
 */
function Content({
  children,
  className,
  direction = "col",
  padding = true,
  ...props
}: IContentProps) {
  const classNames = clsx("flex-1", padding ? "p-6 sm:p-8" : "", className);

  // if row, return row
  if (direction === "row") {
    return (
      <Row asChild className={classNames} {...props}>
        <main>{children}</main>
      </Row>
    );
  }

  // otherwise, return col
  return (
    <Col asChild className={classNames} {...props}>
      <main>{children}</main>
    </Col>
  );
}

Content.displayName = "Content";

export { Content };
export type { IContent, IContentProps };
