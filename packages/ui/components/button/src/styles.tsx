// stateful styles
export const disabled = "disabled:pointer-events-none disabled:opacity-50";
export const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500/50 focus-visible:outline-offset-2";

// TODO: figure out where opinionated styles fit into @clutchd/ui as a whole
// variant styles (optional)
export const styled =
  "px-2 py-1 rounded-md font-medium transition-colors duration-150";
export const danger = `${styled} bg-red-500 text-white hover:bg-red-500/90`;
export const outline = `${styled} border border-gray-950/10 hover:bg-gray-100`;
export const ghost = `${styled} hover:bg-gray-100`;
export const link = `${styled} underline-offset-4 hover:underline`;
