import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Theme from "../theme";

const propTypes = {
  ...Theme.ThemePropTypes,
  shape: PropTypes.oneOf(["rounded", "oval", "sharp"]),
  hover: PropTypes.oneOf(["shadow", "opacity"]),
  background: PropTypes.oneOf([
    "primary",
    "secondary",
    "accent",
    "gradient",
    "glass",
  ]),
};

const defaultProps = {
  ...Theme,
  shape: "rounded",
  hover: "shadow",
  background: "primary",
};

// styles
const StyledButton = styled.button`
  position: relative;
  top: 0;
  font-size: 1rem;
  font-weight: 600;
  margin: 1em;
  padding: 5px 16px 5px 16px;
  color: white;
  border-style: solid;
  border: none;
  cursor: pointer;
  transition: all 200ms;
  ${(props) => handleShape(props)};
  ${(props) => handleBackground(props)};
  :hover {
    ${(props) => handleHover(props)};
  }
`;

const handleShape = (props) => {
  switch (props.shape) {
    case "rounded":
      return css`
        border-radius: 6px;
      `;
    case "oval":
      return css`
        border-radius: 25px;
      `;
    case "sharp":
      return css`
        border-radius: 0px;
      `;
  }
};

const handleBackground = (props) => {
  switch (props.background) {
    case "primary":
      return css`
        background-color: ${props.theme.color.primary};
      `;
    case "secondary":
      return css`
        background-color: ${props.theme.color.secondary};
      `;
    case "accent":
      return css`
        background-color: ${props.theme.color.accent};
      `;
    case "gradient":
      return css`
        background: linear-gradient(
          150deg,
          ${props.theme.color.secondary} 0%,
          ${props.theme.color.primary} 70%,
          ${props.theme.color.accent} 94%
        );
      `;
    case "glass":
      return css`
        background-color: rgb(255, 255, 255, 0.2);
      `;
  }
};

const handleHover = (props) => {
  switch (props.hover) {
    case "shadow":
      return css`
        top: -4px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 18px 0px,
          rgba(0, 0, 0, 0.1) 0px 2px 5px 0px;
      `;
    case "opacity":
      return css`
        opacity: 0.5;
      `;
  }
};

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
