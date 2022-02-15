import React from "react";

/**
 * An extendable React component that can support any standard JSX.IntrinsicElements
 */
export type IBaseComponent<K extends keyof JSX.IntrinsicElements> =
  JSX.IntrinsicElements[K];

/**
 * An extendable React component that supports all standard HTMLAttributes
 */
export interface IComponent extends React.HTMLAttributes<HTMLOrSVGElement> {
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
