import React from "react";
import styled from "styled-components";
import { themePropTypes, themeProps } from "../../utils/theme";

const propTypes = {
  ...themePropTypes
};

const defaultProps = {
  ...themeProps
};

// styles
const StyledButton = styled.button`
  font-size: 1rem;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: ${props => props.theme.color.primary};
  border: 2px solid ${props => props.theme.color.primary};
`;

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
