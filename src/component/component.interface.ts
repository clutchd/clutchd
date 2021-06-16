/**
 * An extendable React component that supports all standard HTMLAttributes
 */
export default interface IComponent
  extends React.HTMLAttributes<HTMLOrSVGElement> {
  tag?: keyof JSX.IntrinsicElements;
  type?: "button" | "submit";
}
