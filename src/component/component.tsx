import * as React from "react";

/**
 * An extendable React component that supports all standard HTMLAttributes
 */
export interface IComponent extends React.HTMLAttributes<HTMLOrSVGElement> {
  tag?: keyof JSX.IntrinsicElements;
}

/**
 * A higher-order component that adds support for all HTMLAttributes
 */
const Component: React.FunctionComponent<IComponent> = ({
  tag: Wrapper = "div",
  children,
  ...rest
}) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default Component;
