import { Caption, ICaptionProps } from "@clutchd/text";

/**
 * Type to define `Copyright` component
 */
type ICopyright = typeof Copyright;

/**
 * Type to define `Copyright` props
 */
interface ICopyrightProps
  extends ICaptionProps {
  name: string
}

/**
 * `Copyright` - A simple text component used to display the copyright of an entity for the current year
 * @param props `ICopyrightProps` used to render this `Copyright`
 * @returns `Copyright` component
 */
function Copyright({
  name,
  ...props
}: ICopyrightProps) {
  const year = new Date().getFullYear();
  return <Caption {...props}>© {year} {name}</Caption>;
}

Copyright.displayName = "Copyright";

export { Copyright };
export type { ICopyrightProps, ICopyright };
