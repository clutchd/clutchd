import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

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

const StyledApp = styled.div`
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
 * The `App` component...
 */
const App = ({ loading, children, ...props }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <StyledApp {...props}>
        {loading ? children : <React.Fragment>{children}</React.Fragment>}
        {/* add loading icon/skeleton component */}
      </StyledApp>
    </React.Fragment>
  );
};

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
