import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';

import { clutchd, themeProps } from '../style/themes';
import { getTheme } from '../style/utils';

const propTypes = {
  theme: themeProps
};

const defaultProps = {
  theme: clutchd
};

const StyledMenu = styled.ul`
  &&& {
    list-style: none;
    line-height: 2.5em;
    padding: 0.5em;
    margin: 0;
    display: inline-flex;
  }
`;

/**
 * The `Menu` component is meant to be used as a navigation component to allow for quick menu building.
 */
const Menu = ({ theme, loading, children, ...props }) => {
  let currentTheme = getTheme(ThemeContext, theme);

  return (
    <StyledMenu theme={currentTheme} {...props}>
      {loading ? children : <React.Fragment>{children}</React.Fragment>}
      {/* add loading icon/skeleton component */}
    </StyledMenu>
  );
};

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;
