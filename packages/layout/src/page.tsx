import { clsx } from "@clutchd/clsx";
import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { Col, Row } from "@clutchd/flex";
import { getBgColor, IWithColor } from "@clutchd/tailwind";

/**
 * Type to define `Page` component
 */
type IPage = typeof Page;

/**
 * Type to define `Page` props
 */
interface IPageProps
  extends IWithColor,
    IComponentPropsWithoutRef<typeof Component.div> {
  direction?: "col" | "row";
  padding?: boolean;
}

/**
 * `Page` - A `Container` designed to contain an entire page. Renders as a `div` element that fills the screen
 * @param props `IPageProps` used to render this `Page`
 * @returns `Page` component
 */
function Page({
  className,
  direction = "col",
  theme = "gray",
  ...props
}: IPageProps) {
  const color = getBgColor(theme, "50");
  const classNames = clsx(
    color,
    "min-h-screen min-w-screen subpixel-antialiased",
    className
  );

  // if row, return row
  if (direction === "row") {
    return <Row className={classNames} {...props} />;
  }

  // otherwise, return col
  return <Col className={classNames} {...props} />;
}

Page.displayName = "Page";

export { Page };
export type { IPage, IPageProps };
