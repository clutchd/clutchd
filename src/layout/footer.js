import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  &&& {
    padding: 0.75em 0.75em;
    display: flex;
    align-items: center;
    flex-direction: row;
    min-height: 2em;
    vertical-align: middle;
    flex-wrap: wrap;
    background-color: rgba(0, 0, 0, 0.25);
    width: 100%;
    min-width: 100%;
  }
`;

/** The `Footer` component... */
const Footer = ({ loading, children, ...props }) => {
  return (
    <StyledFooter {...props}>
      {loading ? children : children}
      {/* add loading icon/skeleton component */}
    </StyledFooter>
  );
};

export default Footer;
