import * as React from "react";

/**
 * An extendable React component that can supports any standard HTMLAttributes
 */
export interface IBaseComponent<T> extends React.HTMLAttributes<T> {}

/**
 * An extendable React component that supports all standard HTMLAttributes
 */
export interface IComponent extends IBaseComponent<HTMLOrSVGElement> {
  as?: keyof JSX.IntrinsicElements;
}

/**
 * A higher-order component that adds support for all HTMLAttributes
 */
const Component: React.FunctionComponent<IComponent> = ({
  as: Wrapper = "div",
  children,
  ...rest
}) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default Component;
