import * as React from "react";

/**
 * An extendable React component that supports all standard HTMLAttributes
 */
export interface IComponent extends React.HTMLAttributes<HTMLOrSVGElement> {
  tag?: keyof JSX.IntrinsicElements;
  type?: "button" | "submit";
}

/**
 * A higher-order component that adds support for all HTMLAttributes
 */
const Component: React.FunctionComponent<IComponent> = ({
  tag: Wrapper = "div",
  children,
  type = "button",
  ...rest
}) => {
  console.log(type);
  switch (Wrapper) {
    case "button":
      return (
        <Wrapper type={type} {...rest}>
          {children}
        </Wrapper>
      );
    default:
      return <Wrapper {...rest}>{children}</Wrapper>;
  }
};

export default Component;
