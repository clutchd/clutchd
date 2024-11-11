import * as React from "react";
import { getCopyright as internalGetCopyright } from ".";

/**
 * Type to define `Copyright` element.
 */
type ICopyright = React.ElementRef<typeof React.Fragment>;

/**
 * Type to define `Copyright` props.
 */
interface ICopyrightProps {
  /**
   * Optional prop to override the default `getCopyright` functionality.
   */
  getCopyright?: typeof internalGetCopyright;
}

/**
 * Type to define `Copyright` props with html attributes.
 */
interface ICopyrightHtmlProps
  extends ICopyrightProps,
    React.ComponentPropsWithoutRef<typeof React.Fragment> {}

/**
 * `Copyright` - A simple text component used to display the copyright of an entity for the current year.
 * @param props `ICopyrightProps` used to render this `Copyright`.
 * @returns `Copyright` component.
 */
const Copyright = ({
  children,
  getCopyright = internalGetCopyright,
}: ICopyrightProps & React.ComponentPropsWithoutRef<typeof React.Fragment>) => (
  <>
    {getCopyright()}
    {children && `  ${children}`}
  </>
);

Copyright.displayName = "Copyright";

export { Copyright };
export type { ICopyright, ICopyrightHtmlProps, ICopyrightProps };
