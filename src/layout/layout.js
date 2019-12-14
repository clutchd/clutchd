import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  #root, body, html {
    min-height: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    min-width: 250px;
    width: 100%;
  }
`;

const StyledLayout = styled.div`
  &&& {
    background-color: rgba(0, 0, 0, 0.25);
    min-height: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    min-width: 250px;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
`;

/**
 * The `Layout` component...
 */
const Layout = ({ loading, children, ...props }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <StyledLayout {...props}>
        {loading ? children : <React.Fragment>{children}</React.Fragment>}
        {/* add loading icon/skeleton component */}
      </StyledLayout>
    </React.Fragment>
  );
};

export default Layout;
