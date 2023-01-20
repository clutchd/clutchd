import { Caption, ICaptionProps } from "@clutchd/text";

/**
 * Type to define `Copyright` component
 */
type ICopyright = typeof Copyright;

/**
 * Type to define `Copyright` props
 */
interface ICopyrightProps extends ICaptionProps {
}

/**
 * `Copyright` - A simple text component used to display the copyright of an entity for the current year
 * @param props `ICopyrightProps` used to render this `Copyright`
 * @returns `Copyright` component
 */
function Copyright({ children, ...props }: ICopyrightProps) {
  const year = new Date().getFullYear();
  return (
    <Caption {...props}>
      © {year} {children}
    </Caption>
  );
}

Copyright.displayName = "Copyright";

export { Copyright };
export type { ICopyrightProps, ICopyright };
