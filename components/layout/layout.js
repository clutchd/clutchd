import React from 'react';
import styled, { createGlobalStyle, ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';

import { clutchd } from '../themed/themes';
import { getTheme, themedProps } from '../themed/utils';

const propTypes = {
  theme: themedProps.theme
};

const defaultProps = {
  theme: clutchd.theme
};

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
const Layout = ({ theme, loading, children, ...props }) => {
  let currentTheme = getTheme(ThemeContext, theme);
  return (
    <React.Fragment>
      <GlobalStyle />
      <StyledLayout theme={currentTheme} {...props}>
        {loading ? children : <React.Fragment>{children}</React.Fragment>}
        {/* add loading icon/skeleton component */}
      </StyledLayout>
    </React.Fragment>
  );
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
