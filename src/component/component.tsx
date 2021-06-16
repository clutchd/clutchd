import IComponent from "./component.interface";

/**
 * A higher-order component that adds support for all HTMLAttributes
 */
const Component: React.FunctionComponent<IComponent> = ({
  tag: Wrapper = "div",
  children,
  type,
  ...rest
}) => {
  switch (Wrapper) {
    case "button":
      return (
        <Wrapper {...type} {...rest}>
          {children}
        </Wrapper>
      );
    default:
      return <Wrapper {...rest}>{children}</Wrapper>;
  }
};

export default Component;
