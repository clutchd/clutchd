import React, { useEffect } from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';

import { clutchd, themeProps } from '../style/themes';
import { getTheme } from '../style/utils';

const propTypes = {
  theme: themeProps
};

const defaultProps = {
  theme: clutchd
};

const StyledHeader = styled.header`
  &&& {
    padding: 0.75em 0.75em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    min-width: 100%;
    color: ${props => props.theme.colors.light};
    background-color: ${props => props.theme.colors.dark};
  }
`;

/** The `Header` component... */
const Header = ({ theme, loading, children, ...props }) => {
  let currentTheme = getTheme(ThemeContext, theme);

  return (
    <StyledHeader theme={currentTheme} {...props}>
      {loading ? children : children}
      {/* add loading icon/skeleton component */}
    </StyledHeader>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
