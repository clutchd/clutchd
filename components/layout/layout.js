import React from 'react';
import styled, { createGlobalStyle, ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';

import { clutchd, themeProps } from '../style/themes';
import { getTheme } from '../style/utils';

const propTypes = {
  theme: themeProps
};

const defaultProps = {
  theme: clutchd
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
        {loading ? (
          {
            /* add loading icon/skeleton component */
          }
        ) : (
          <React.Fragment>{children}</React.Fragment>
        )}
      </StyledLayout>
    </React.Fragment>
  );
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
