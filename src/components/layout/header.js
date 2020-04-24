import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  &&& {
    display: flex;
    flex-direction: row;
    min-height: 4em;
    flex-wrap: wrap;
    background-color: rgba(0, 0, 0, 0.25);
    width: 100%;
    min-width: 100%;
  }
`;

/** The `Header` component... */
const Header = ({ loading, children, ...props }) => {
  return (
    <StyledHeader {...props}>
      {loading ? children : children}
      {/* add loading icon/skeleton component */}
    </StyledHeader>
  );
};

export default Header;
