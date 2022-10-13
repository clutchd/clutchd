/**
 * Type to define `Divider` component
 */
type IDivider = typeof Divider;

/**
 * Type to define `Divider` props
 */
interface IDividerProps {
  direction?: "horizontal" | "vertical";
  hr?: boolean;
}

/**
 * `Divider` - A separator used to create vertical space between elements
 * @param props `IDividerProps` used to render this `Divider`
 * @returns `Divider` component
 */
function Divider({
  direction = "horizontal",
  hr = true,
  ...props
}: IDividerProps) {
  const horizontal = "w-full mx-auto mt-6 mb-6 h-[3px]";
  const vertical = "h-full my-auto ml-6 mr-6 w-[3px]";
  const line = hr ? "bg-gray-200" : "bg-inherit";

  return (
    <div
      {...props}
      className={`transition-all duration-200 rounded-lg ${line} ${
        direction === "horizontal" ? horizontal : vertical
      }`}
    />
  );
}

export { Divider };
export type { IDivider, IDividerProps };
