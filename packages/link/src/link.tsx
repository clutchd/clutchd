import { clsx } from "@clutchd/clsx";
import { IComponent, ReactPropsWithoutRef } from "@clutchd/component";
import NextLink from "next/link";

/**
 * Type to define `Link` component
 */
type ILink = typeof Link;

/**
 * Type to define `Link` props
 */
interface ILinkProps extends ReactPropsWithoutRef<IComponent["a"]> { }

/**
 * `Link` - A simple link component, leverages next/link
 * @param props `ILinkProps` used to render this `Link`
 * @returns `Link` component
 */
function Link({ className, href = "/", ...props }: ILinkProps) {
  const classNames = clsx("cursor-pointer", className);

  return <NextLink className={classNames} href={href} {...props} />;
}

export { Link };
export type { ILinkProps, ILink };
