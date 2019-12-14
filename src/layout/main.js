import React from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  &&& {
    padding: 0.75em 0.75em;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex: auto;
    width: 100%;
    min-width: 100%;
  }
`;

/** The `Main` component... */
const Main = ({ loading, children, ...props }) => {
  return (
    <StyledMain {...props}>
      {loading ? children : children}
      {/* add loading icon/skeleton component */}
    </StyledMain>
  );
};

export default Main;
