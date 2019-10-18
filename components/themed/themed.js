import React from 'react';
import { ThemeProvider, ThemeContext } from 'styled-components';
import { clutchd } from './themes';
import { themedProps } from './utils';

const propTypes = {
  theme: themedProps.theme
};
const defaultProps = {
  theme: clutchd.theme
};

/**
 * The `Themed` component is simply a modified ThemeProvider from styled-components.  This component comes will all the default stylings of @clutchd/ui.
 */
const Themed = ({ theme, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>{children}</React.Fragment>
      {/* add loading icon/skeleton component */}
    </ThemeProvider>
  );
};

Themed.propTypes = propTypes;
Themed.defaultProps = defaultProps;

export default Themed;
