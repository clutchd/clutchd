import { clsx } from "@clutchd/clsx";
import { IComponent, ReactPropsWithoutRef } from "@clutchd/component";
import { Col, Row } from "@clutchd/flex";
import { getColor, IWithColor } from "@clutchd/tailwind";

/**
 * Type to define `Page` component
 */
type IPage = typeof Page;

/**
 * Type to define `Page` props
 */
interface IPageProps
  extends IWithColor,
    ReactPropsWithoutRef<IComponent["div"]> {
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
  const color = getColor(theme, "50").bgColor;
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
