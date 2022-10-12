/**
 * Type to define `Divider` component
 */
type IDivider = typeof Divider;

/**
 * Type to define `Divider` props
 */
interface IDividerProps {
  hr?: boolean;
}

/**
 * `Divider` - A separator used to create vertical space between elements
 * @param props `IDividerProps` used to render this `Divider`
 * @returns `Divider` component
 */
function Divider({ hr = true, ...props }: IDividerProps) {
  return (
    <div
      {...props}
      className={`w-full mx-auto mt-6 mb-6 rounded-lg h-[3px] ${
        hr ? "bg-gray-200" : "bg-inherit"
      }`}
    />
  );
}

export { Divider };
export type { IDivider, IDividerProps };
