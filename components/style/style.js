import React from 'react';
import { ThemeProvider, ThemeContext } from 'styled-components';
import { clutchd, themeProps } from './themes';
import { getTheme } from './utils';

const propTypes = {
  theme: themeProps
};

const defaultProps = {
  theme: clutchd
};

/**
 * The `Themed` component is simply a modified ThemeProvider from styled-components.  This component comes will all the default stylings of @clutchd/ui.
 */
const Style = ({ theme, children }) => {
  let currentTheme = getTheme(ThemeContext, theme);

  return (
    <ThemeProvider theme={currentTheme}>
      <React.Fragment>{children}</React.Fragment>
      {/* add loading icon/skeleton component */}
    </ThemeProvider>
  );
};

Style.propTypes = propTypes;
Style.defaultProps = defaultProps;

export default Style;
