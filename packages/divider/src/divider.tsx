type IDivider = typeof Divider;

interface IDividerProps {
  hr?: boolean;
}

function Divider({ hr = true, ...props }: IDividerProps) {
  return (
    <div {...props} className={`w-full mx-auto mt-6 mb-6 rounded-lg h-[3px] ${hr ? "bg-gray-200" : "bg-inherit"}`} />
  );
}

export { Divider };
export type { IDivider, IDividerProps };
