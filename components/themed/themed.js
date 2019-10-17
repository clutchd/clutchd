import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themedProps, clutchd } from './utils';

const propTypes = themedProps;
const defaultProps = clutchd;

/**
 * The `Themed` component is simply a modified ThemeProvider from styled-components.  This component comes will all the default stylings of @clutchd/ui.
 */
const Themed = ({ children }) => {
  return (
    <ThemeProvider theme={clutchd}>
      <React.Fragment>{children}</React.Fragment>
      {/* add loading icon/skeleton component */}
    </ThemeProvider>
  );
};

Themed.propTypes = propTypes;
Themed.defaultProps = defaultProps;

export default Themed;
